import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../services/userServices";
import validateForm from "../Validaion/login";

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setErrors] = useState({});
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    const errors = validateForm(formValues);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      userLogin({ formValues }).then((response) => {
        if (response.data.auth) {
          localStorage.setItem("userToken", response.data.token);
          navigate("/profile");
        } else if (response.data.error) {
          setErr(response.data.error);
        }
      });
    }
  };

  return (
    <div className="flex h-screen font-NotoSans">
      <div
        className="w-1/2 p-5 m-5 max-w-full rounded-lg bg-cover"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/background.png')`,
        }}
      >
        <img src="images/logo1.png" alt="" className="absolute"></img>
      </div>
      <div className="w-1/2 p-10 max-w-full flex flex-col justify-center items-start gap-4">
        <div className="grid justify-items-start">
          <h1 className="font-semibold text-[#7181A1] text-sm leading-normal">
            Welcome
          </h1>
          <h1 className="font-bold text-3xl leading-10">Login</h1>
        </div>
        <form className="w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Email
              </label>
            </div>
            <input
              type="email"
              className="p-2 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="********"
              value={formValues.email}
              onChange={handleChange}
              name="email"
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Password
              </label>
            </div>
            <input
              type="password"
              className="p-2 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="********"
              value={formValues.password}
              onChange={handleChange}
              name="password"
            />
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>
        </form>
        <div className="flex justify-end w-2/3">
          <p className="font-normal text-sm leading-5 text-[#6688FF]">
            Forgotten password?
          </p>
        </div>
        {err && (
          <div className="text-center">
            <h1 className="error text-red-500 mt-5 text center">{err}</h1>
          </div>
        )}
        <div className="flex flex-col w-1/2 mt-5">
          <button
            className="bg-[#194DFF] text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className="flex">
          <h1 className="font-normal font-normal text-sm leading-5 text-[#A0ABC0]">
            Don't have an Account?
          </h1>
          <Link to="/signup">
            <h1 className="ml-2 text-[#3361FF] underline">Sign up</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

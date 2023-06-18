import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validateForm from "../Validaion/signup";
import { userSignUp } from "../services/userServices";


function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    DOB: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [error, setErrors] = useState({});
  const [err,setErr] = useState('');

  const handleChange = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    if (Object.keys(errors).length !== 0) {
        setErrors(errors);
      }
      else{
         userSignUp({formValues}).then((response)=>{
            if(response.data.success){
              navigate('/login');
            }
            else{
              setErr(response.data.error);
            }
          })
      }
      
  };

  return (
    <div className="flex h-screen font-NotoSans">
      <div
        className="w-1/3 p-2 m-4 max-w-full rounded-lg bg-cover"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/background.png')`,
        }}
      >
        <img src="images/logo1.png" alt="" className="absolute" />
      </div>
      <div className="w-2/3 p-4 max-h-screen">
        <div className="grid justify-items-start">
          <h1 className="font-semibold text-[#7181A1] text-sm leading-normal">
            Welcome
          </h1>
          <h1 className="font-bold text-3xl leading-10">Sign Up</h1>
        </div>
        {err && (
          <div className="text-center">
            <h1 className="error text-red-500 mt-5 text center">{err}</h1>
          </div>
        )}
        <div className="grid grid-cols-2 mt-2">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Full Name
              </label>
            </div>
            <input
              type="text"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="Jhone Deo"
              value={formValues.fullName}
              onChange={handleChange}
              name="fullName"
            />
            {error.fullName && (
                  <p className="text-red-500">{error.fullName}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Email
              </label>
            </div>
            <input
              type="email"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="********"
              value={formValues.email}
              onChange={handleChange}
              name="email"
            />
            {error.email && (
                  <p className="text-red-500">{error.email}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Date of Birth
              </label>
            </div>
            <input
              type="date"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="mm/dd/yyyy"
              value={formValues.DOB}
              onChange={handleChange}
              name="DOB"
            />
            {error.DOB && (
                  <p className="text-red-500">{error.DOB}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Password
              </label>
            </div>
            <input
              type="password"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="********"
              value={formValues.password}
              onChange={handleChange}
              name="password"
            />
            {error.password && (
                  <p className="text-red-500">{error.password}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Phone Number
              </label>
            </div>
            <input
              type="tel"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="9562373406"
              value={formValues.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />
            {error.phoneNumber && (
                  <p className="text-red-500">{error.phoneNumber}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="********"
              value={formValues.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
            {error.confirmPassword && (
                  <p className="text-red-500">{error.confirmPassword}</p>
                )}
          </div>
        </div>
        <div className="mt-2 flex flex-col items-start">
          <p className="text-black-700 font-semibold ml-0">Security Question</p>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                What is your school name?
              </label>
            </div>
            <input
              type="text"
              className="p-1 w-1/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="Little Flower School"
              value={formValues.securityQuestion}
              onChange={handleChange}
              name="securityQuestion"
            />
            {error.securityQuestion && (
                  <p className="text-red-500">{error.securityQuestion}</p>
                )}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between">
            <label className="font-normal text-base leading-normal text-[#4D5E80]">
              Address
            </label>
          </div>
          <input
            type="text"
            className="p-1 w-full font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
            placeholder="ABC Line"
            value={formValues.address}
            onChange={handleChange}
            name="address"
          />
          {error.address && (
                  <p className="text-red-500">{error.address}</p>
                )}
        </div>
        <div className="flex justify-start mt-2">
          <div className="mr-4 flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
               City
              </label>
            </div>
            <select name="city" onChange={handleChange} value={formValues.city} 
            className="border-solid border border-[#E2E7F0]">
              <option value="Select">Select</option>
              <option value="Banglore">Banglore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
            </select>
            {error.city && (
                  <p className="text-red-500">{error.city}</p>
                )}
          </div>
          <div className="mr-4 flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                State
              </label>
            </div>
            <select
              name="state"
              onChange={handleChange}
              value={formValues.state}
              className="border-solid border border-[#E2E7F0]"
            >
              <option value="Select">Select</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
            {error.state && (
                  <p className="text-red-500">{error.state}</p>
                )}
          </div>

          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                ZIP Code
              </label>
            </div>
            <input
              type="number"
              className="p-1 w-2/3 font-medium border-solid border border-[#E2E7F0] rounded-md placeholder:opacity-60"
              placeholder="******"
              value={formValues.zipCode}
              onChange={handleChange}
              name="zipCode"
            />
            {error.zipCode && (
                  <p className="text-red-500">{error.zipCode}</p>
                )}
          </div>
          <div className="mr-4 flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <label className="font-normal text-base leading-normal text-[#4D5E80]">
                Country
              </label>
            </div>
            <select
              name="country"
              onChange={handleChange}
              value={formValues.country}
              className="border-solid border border-[#E2E7F0]"
            >
              <option value="Select">Select</option>
              <option value="India">India</option>
            </select>
            {error.country && (
                  <p className="text-red-500">{error.country}</p>
                )}
          </div>
        </div>

        <div className="flex flex-col w-1/2 mt-4">
          <button
            className="bg-[#194DFF] text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className="flex mt-2">
          <h1 className="font-normal text-sm leading-5 text-[#A0ABC0]">
            Already have an Account?
          </h1>
          <Link to="/login" className="ml-2 text-[#3361FF] underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

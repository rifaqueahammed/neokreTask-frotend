const validateForm = (formValues) => {
  const errors = {};

  // Email validation
  if (!formValues.email.trim()) {
    errors.email = "Email Address is required";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Email Address is not valid";
  }

  // Password validation
  if (!formValues.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export default validateForm;

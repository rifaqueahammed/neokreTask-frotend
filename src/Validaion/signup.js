const validateForm = (formValues) => {
  const errors = {};

  // Full Name validation
  if (!formValues.full_name.trim()) {
    errors.full_name = "Full Name is required";
  } else if (!/^[A-Za-z ]+$/.test(formValues.full_name)) {
    errors.full_name = "Full Name should contain alphabetic characters only";
  } else if (formValues.full_name.length > 50) {
    errors.full_name = "Full Name should not exceed 50 characters";
  }

  // Email validation
  if (!formValues.email.trim()) {
    errors.email = "Email Address is required";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Email Address is not valid";
  }

  // Password validation
  if (!formValues.password.trim()) {
    errors.password = "Password is required";
  } else if (formValues.password.length < 8) {
    errors.password = "Password should be at least 8 characters long";
  } else if (!/[A-Z]/.test(formValues.password)) {
    errors.password = "Password should contain at least one uppercase letter";
  } else if (!/\d/.test(formValues.password)) {
    errors.password = "Password should contain at least one digit";
  }

  // Confirm Password validation
  if (formValues.confirm_password !== formValues.password) {
    errors.confirm_password = "Passwords do not match";
  }

  // Date of Birth validation
  if (!formValues.DOB.trim()) {
    errors.DOB = "Date of Birth is required";
  } else {
    const dob = new Date(formValues.DOB);
    if (isNaN(dob.getTime())) {
      errors.DOB = "Invalid Date of Birth";
    }
  }

  // Phone Number validation
  if (!formValues.phone_number.trim()) {
    errors.phone_number = "Phone Number is required";
  } else if (!/^\d{10}$/.test(formValues.phone_number)) {
    errors.phone_number = "Phone Number should be a 10-digit number";
  }

  // Address validation
  if (!formValues.address.trim()) {
    errors.address = "Address is required";
  } else if (formValues.address.length > 100) {
    errors.address = "Address should not exceed 100 characters";
  }

  // City validation
  if (!formValues.city.trim()) {
    errors.city = "City is required";
  } else if (!/^[A-Za-z ]+$/.test(formValues.city)) {
    errors.city = "City should contain alphabetic characters only";
  } else if (formValues.city.length > 50) {
    errors.city = "City should not exceed 50 characters";
  }

  // State validation
  if (!formValues.state.trim()) {
    errors.state = "State is required";
  }

  // Zip Code validation
  if (!formValues.zip_code.trim()) {
    errors.zip_code = "ZIP Code is required";
  } else if (!/^\d{6}$/.test(formValues.zip_code)) {
    errors.zip_code = "ZIP Code must be a 6-digit number";
  }

  // Country validation
  if (!formValues.country.trim()) {
    errors.country = "Country is required";
  }

  // Security Question validation
  if (!formValues.security_question.trim()) {
    errors.security_question = "Security Question is required";
  } else if (formValues.security_question.length > 100) {
    errors.address = "Security Question should not exceed 100 characters";
  }

  return errors;
};

export default validateForm;

const Validation = (values) => {
  let errors = {};

  // Name validation
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation using regex
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation using regex
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordPattern.test(values.password)) {
    errors.password =
      "Password must be at least 8 characters, include an uppercase letter, a number, and a special character";
  }

  return errors;
};

export default Validation;

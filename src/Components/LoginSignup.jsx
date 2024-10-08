import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/user_icon.png";
import password_icon from "../Assets/password_icon.png";
import email_icon from "../Assets/email_icon.png";
import Validation from "./Validation";

const LoginSignup = () => {
  const [action, setAction] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  // Handle validation and form submission
  function handleValidation(event) {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (action === "Sign Up") {
        // Handle Sign Up logic
        console.log("Sign Up form submitted successfully!");
        console.log("Submitted values:", values);
        // Clear form after submission (optional)
        setValues({
          name: "",
          email: "",
          password: "",
        });
      } else if (action === "Login") {
        // Handle Login logic
        console.log("Login form submitted successfully!");
        console.log("Submitted values:", values);
        // Clear form after submission (optional)
        setValues({
          name: "",
          email: "",
          password: "",
        });
      }
    }
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleValidation}>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {/* Conditionally show name input for Sign Up */}
            {action === "Login" ? null : (
              <div className="input">
                <img src={user_icon} alt="User Icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={handleInput}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
            )}

            <div className="input">
              <img src={email_icon} alt="Email Icon" />
              <input
                type="email"
                name="email"
                placeholder="user@gmail.com"
                value={values.email}
                onChange={handleInput}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div className="input">
              <img src={password_icon} alt="Password Icon" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleInput}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            {action === "Login" ? (
              <div className="forgot-password">
                Forgot Password? <span>Click Here</span>
              </div>
            ) : null}

            {action === "Sign Up" ? (
              <div className="create-account">
                Already have an account?{" "}
                <span onClick={() => setAction("Login")}>Login Here</span>
              </div>
            ) : null}

            <div className="submit-container">
              {action === "Sign Up" ? (
                <button type="submit" className="submit">
                  Sign up
                </button>
              ) : (
                <button type="submit" className="submit">
                  Login
                </button>
              )}

              {/* Toggle between Sign Up and Login */}
              {action === "Sign Up" ? (
                <button
                  type="button"
                  className="submit gray"
                  onClick={() => setAction("Login")}
                >
                  Login
                </button>
              ) : (
                <button
                  type="button"
                  className="submit gray"
                  onClick={() => setAction("Sign Up")}
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;

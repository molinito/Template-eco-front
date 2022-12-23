import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginSuccess = await dispatch(loginUser(input));
    if (loginSuccess) navigate("/shop");
  };

  const validation = (input) => {
    let errors = {};

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!input.email) {
      errors.email = "You must write the email address";
    }

    if (!emailRegex.test(input.email)) {
      errors.email = "This is not a valid email address";
    }

    if (!input.password) {
      errors.password = "You must write the password";
    }

    return errors;
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email && <p className="error_msg">{errors.email}</p>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="input"
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
            {errors.password && <p className="error_msg">{errors.password}</p>}
            <button type="submit" className="green_btn">
              Sing In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
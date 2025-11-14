import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) {
      return handleError("All fields required!!");
    }
    try {
      const url = "http://localhost:3000/api/v2/RegistrationForm/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const res = await response.json();

      const { message, token, status, name } = res;
      if (!response.ok) {
        return handleError(message || "Enter valid username and password");
      }
      handleSuccess(status || "Login Success");
      localStorage.setItem("JWT token", token);
      localStorage.setItem("loggedBy", name);
      setForm({
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      return handleError(error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div>
          <label>password</label>
          <input
            onChange={handleChange}
            value={form.password}
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/signup">SignIn</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;

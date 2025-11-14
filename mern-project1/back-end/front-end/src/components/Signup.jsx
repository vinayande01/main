import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = form;
    if (!name || !email || !password) {
      return handleError("All fields required!!");
    }
    try {
      const url = "http://localhost:3000/api/v2/RegistrationForm/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const res = await response.json();
      console.log(res);

      if (!response.ok || response.status === 409) {
        return handleError(res.message || res.error || "Signup failed");
      }

      // success
      handleSuccess(res.message || "Signup successful");
      setForm({ name: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      return handleError(error.message || String(error));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="container">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            autoFocus
            placeholder="Enter name"
            name="name"
          />
        </div>
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
        <button type="submit">Signup</button>
        <span>
          Account already exist? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;

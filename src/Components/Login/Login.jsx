import React from "react";
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form id="loginForm">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="error-message" id="errorMessage"></p>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;

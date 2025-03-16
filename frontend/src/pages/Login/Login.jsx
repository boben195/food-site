import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [currentState, serCurrentState] = useState("Login");
  return (
    <div>
      <form className="auth-form" action="">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>

        {currentState === "Login" ? null : (
          <input
            type="text"
            className="form-input"
            placeholder="Full name"
            required
          />
        )}
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          required
        />
        <div className="form-footer">
          <p className="fgt-password">Forget password ?</p>
          {currentState === "Login" ? (
            <p
              className="toggle-auth-state"
              onClick={() => serCurrentState("Sign Up")}
            >
              Create Account
            </p>
          ) : (
            <p
              className="toggle-auth-state"
              onClick={() => serCurrentState("Login")}
            >
              Login Here
            </p>
          )}
        </div>
        <button className="form-btn">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;

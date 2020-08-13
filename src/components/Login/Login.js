import React, { useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { Link, navigate } from "@reach/router";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Login succesful
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Registered and logged in
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <Header />
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
            alt=""
          />
        </Link>

        <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <h5>Password</h5>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <button
              onClick={login}
              type="submit"
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
          <p>
            This is only a clone of Amazon website. Do not use any personal
            credentials.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

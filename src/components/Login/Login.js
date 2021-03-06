import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [{ user }] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Login succesful
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Registered and logged in
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
        />
      </Link>

      {!user ? (
        <div className="login__container">
          <h1>Login</h1>
          <form>
            <h5>Email</h5>
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
          <p>
            If you are creating a new account, please fill in all the fields and
            click on the above button.
          </p>
        </div>
      ) : (
        <div>Already logged in</div>
      )}
    </div>
  );
};

export default Login;

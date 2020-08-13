import React, { useEffect } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // no user is logged in

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Home path="/" />
      <Checkout path="/checkout" />
      <Login path="/login" />
    </Router>
  );
}

export default App;

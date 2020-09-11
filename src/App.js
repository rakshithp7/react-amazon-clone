import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const promise = loadStripe(
  "pk_test_51HQ5nGIYLFfGhUgWihtWbnojeCTX0WbcpnzgVyyb0EBli8SRSIz7PTUsoXOapDle5iWjBS65EN2t5ee1tFA3igL300W6zOoyFD"
);

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
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

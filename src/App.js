import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Checkout path="/checkout" />
    </Router>
  );
}

export default App;

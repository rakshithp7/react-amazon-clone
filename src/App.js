import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;

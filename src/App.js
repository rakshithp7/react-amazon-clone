import React from "react";
import { Router } from "@reach/router";
import "./App.css";

const Home = () => {
  return (
    <div className="app">
      <h1>Welcome</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;

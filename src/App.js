import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="app">
      <h1>Welcome</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;

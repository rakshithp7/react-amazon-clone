import React from "react";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

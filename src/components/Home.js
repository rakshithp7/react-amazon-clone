import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

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

      {/* Products */}
      <div className="home__row">
        <Product
          id="123123"
          title="Apple iPhone 11 (64GB) - White"
          price={67300}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX522_.jpg"
        />
        <Product
          id="123123"
          title="Apple iPhone 11 (64GB) - White"
          price={67300}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX522_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

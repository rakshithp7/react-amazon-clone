import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Product from "../Product/Product";

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
          key="1234123"
          id="1234123"
          title="Apple iPhone 11 (64GB) - White"
          price={67300}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX522_.jpg"
        />
        <Product
          key="123123"
          id="123123"
          title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
          price={37999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SX466_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import Product from "../Product/Product";
import { database } from "../../firebase";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    database
      .collection("products")
      .onSnapshot((snapshot) =>
        setProducts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

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
        {products.slice(0, 2).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(2, 5).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(5).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

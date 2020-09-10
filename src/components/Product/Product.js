import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
        quantity: 1,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{Number(price).toLocaleString()}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" key={i} aria-label="">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;

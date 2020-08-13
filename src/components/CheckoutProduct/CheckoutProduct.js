import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{Number(price).toLocaleString()}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

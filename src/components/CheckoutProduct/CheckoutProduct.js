import React, { useState, forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CheckoutProduct = forwardRef(
  ({ id, title, image, price, rating, quantity }, ref) => {
    const [, dispatch] = useStateValue();
    const [quant, setQuant] = useState(quantity);

    const removeFromCart = () => {
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
      });
    };

    const decreaseQuantity = () => {
      if (quant > 1) {
        dispatch({
          type: "DECREASE_QUANTITY",
          id: id,
        });
        setQuant(quant - 1);
      }
    };

    const increaseQuantity = () => {
      dispatch({
        type: "INCREASE_QUANTITY",
        id: id,
      });
      setQuant(quant + 1);
    };

    return (
      <div className="checkoutProduct" ref={ref}>
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
              .map((_, index) => (
                <span role="img" key={index} aria-label="">
                  ⭐
                </span>
              ))}
          </div>
          <div className="checkoutProduct__quantity">
            <p>Quantity:</p>{" "}
            {quant === 1 ? (
              <RemoveIcon
                className="checkoutProduct__quantityDisabled"
                fontSize="small"
              />
            ) : (
              <RemoveIcon fontSize="small" onClick={decreaseQuantity} />
            )}
            {quant}
            <AddIcon fontSize="small" onClick={increaseQuantity} />
          </div>
          <button onClick={removeFromCart}>Remove from cart</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;

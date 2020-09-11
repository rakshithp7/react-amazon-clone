import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>order id: {order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CheckoutProduct
          id={item.id}
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          quantity={item.quantity}
          payment
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        prefix={"₹"}
        thousandSeparator={true}
        thousandSpacing={"2s"}
      />
    </div>
  );
};

export default Order;

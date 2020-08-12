import React from "react";
import { useStateValue } from "../StateProvider";
import Header from "./Header";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ cart }] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/31/prime/CEO/2018/Sep/SlashPrime/v2/IN-PR-Slash-Prime-Redesign-Deals-banner-1400x350._CB485016077_.jpg"
            alt=""
          />
          {cart?.length === 0 ? (
            <div>
              <h2>Your Shopping Cart is empty.</h2>
              <p>
                Your Shopping Cart lives to serve. Give it purpose--fill it with
                books, CDs, videos, DVDs, electronics, and more.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Cart:</h2>

              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

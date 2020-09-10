import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} Product): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        prefix={"₹"}
        thousandSeparator={true}
        thousandSpacing={"2s"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;

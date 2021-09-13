import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format"; //React component to format number in an input or as a text (font: npm)

function Subtotal() {
  return <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

    <button>Proceed to Checkout</button>
  </div>;
}

export default Subtotal;

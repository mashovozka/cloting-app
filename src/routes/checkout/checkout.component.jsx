import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

export default function Checkout() {
  const { cartItems, totalSum } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header-container">
        <span className="checkout-header-item">Product</span>
        <span className="checkout-header-item">Description</span>
        <span className="checkout-header-item">Quantity</span>
        <span className="checkout-header-item">Price</span>
        <span className="checkout-header-item">Remove</span>
      </div>
      <hr />
      <div className="checkout-items-container">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total">Total: ${totalSum}</div>
    </div>
  );
}

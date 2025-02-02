import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import { CartItem } from "../cart-item/cart-item.component";

import {
  CartDropdowncontainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

import "./cart-dropdown.styles.jsx";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdowncontainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        className="button-container inverted"
        onClick={goToCheckoutHandler}
      >
        CHECKOUT
      </Button>
    </CartDropdowncontainer>
  );
};

export default CartDropdown;

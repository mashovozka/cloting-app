import "./checkout-item.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export const CheckoutItem = ({ item }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, quantity, imageUrl, price } = item;

  const clearItemHandler = () => clearItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <img className="checkout-item-img" src={imageUrl} alt={`${name}`} />
      <span className="checkout-item-name">{name}</span>
      <span className="checkout-item-quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="checkout-item-price">{price * quantity}</span>
      <span className="checkout-item-remove">
        <Button onClick={clearItemHandler}>&#10005;</Button>
      </span>
    </div>
  );
};

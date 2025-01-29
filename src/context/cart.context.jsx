import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementProductQuantityInCart = (cartItems, itemToReduce) => {
  return cartItems
    .map((cartItem) =>
      cartItem.id === itemToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    .filter((item) => item.quantity > 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  totalSum: 0,
  setTotalSum: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    setCartItems([]);
  }, []);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalSum(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const clearItemFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(decrementProductQuantityInCart(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    clearItemFromCart,
    removeItemFromCart,
    totalSum,
  };

  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

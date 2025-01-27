import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState([]);
  const value = { isCartOpen, setIsCartOpen };

  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

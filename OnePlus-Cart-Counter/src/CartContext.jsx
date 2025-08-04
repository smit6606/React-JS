import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 3) {
      setQuantity((prev) => prev + 1);
    } else {
      alert("The quantity of product has reached to the limitation.");
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const removeItem = () => {
    setQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{ quantity, increment, decrement, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

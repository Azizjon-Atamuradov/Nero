import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === size,
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          selectedSize: size,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size)),
    );
  };

  const decreaseQty = (id, size) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.selectedSize === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

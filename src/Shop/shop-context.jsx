import { createContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        } else {
          console.error(`Product with id ${item} not found`);
        }
      }
    }
    return totalAmount;
  };

  const totalAmount = useMemo(() => getTotalCartAmount(), [cartItems]);

  const addToCart = (itemId) => {
    const productExists = PRODUCTS.some(product => product.id === itemId);
    if (productExists) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } else {
      console.error(`Attempted to add non-existing product with id ${itemId}`);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId];
      return { ...prev, [itemId]: currentQuantity > 0 ? currentQuantity - 1 : 0 };
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount >= 0 ? newAmount : 0 }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    totalAmount, // Add totalAmount to context
    addToCart,
    updateCartItemCount,
    removeFromCart,
    checkout,
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

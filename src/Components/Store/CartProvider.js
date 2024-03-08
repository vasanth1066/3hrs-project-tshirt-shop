import React, { useState } from "react";
import Cartcontext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem.productName === item.productName
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (productName) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.productName !== productName)
    );
  };

  const decreaseItemQuantity = (productName) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.productName === productName && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
    decreaseQuantity: decreaseItemQuantity,
  };

  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;

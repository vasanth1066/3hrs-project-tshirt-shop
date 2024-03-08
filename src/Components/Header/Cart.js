import React, { useContext } from "react";
import Cartcontext from "../Store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../Modal/Modal";

const Cart = (props) => {
  const { items, decreaseQuantity } = useContext(Cartcontext); // Assuming you have a cart items state and a function to remove items in your context

  const handleRemoveItem = (productName) => {
    decreaseQuantity(productName);
  };

  return (
    <Modal onClose={props.onClose}>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(
          (item) =>
            // Check if the item has a productName
            item.productName && (
              <li key={item.id}>
                <div className={classes.cartItem}>
                  <span>Name: {item.productName}</span>
                  <span> Price: {item.productprice}</span>
                  <span> Description: {item.productDescription} </span>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => handleRemoveItem(item.productName)}>
                    Remove
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
      <div>
        <button onClick={props.onClose} className={classes.cancel_button}>
          Cancel
        </button>
        <button className={classes.order_button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

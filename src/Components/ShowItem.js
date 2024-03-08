import React, { useState, useContext } from "react";
import CartContext from "./Store/cart-context";
import classes from "./ShowItem.module.css";

function ShowItem({ product }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState({
    S: product.productQuantity_S,
    M: product.productQuantity_M,
    L: product.productQuantity_L,
  });

  const handleBuy = (size) => {
    if (quantity[size] > 0) {
      addItem({ ...product, size });
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [size]: prevQuantity[size] - 1,
      }));
    }
  };

  return (
    <div className={classes.content}>
      <span>Name: {product.productName}</span>
      <span> Description: {product.productDescription}</span>
      <span> Price: {product.productprice}</span>
      <button onClick={() => handleBuy("S")}>
        Buy small ({quantity["S"]})
      </button>
      <button onClick={() => handleBuy("M")}>
        Buy medium ({quantity["M"]})
      </button>
      <button onClick={() => handleBuy("L")}>
        Buy large ({quantity["L"]})
      </button>
    </div>
  );
}

export default ShowItem;

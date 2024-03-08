import React, { useContext } from "react";

import classes from "./header.module.css";
import Cartcontext from "../Store/cart-context";

function HeaderButton(props) {
  const cartcxt = useContext(Cartcontext);
  let qty = 0;
  cartcxt.items.forEach((item) => {
    qty = qty + Number(item.quantity);
  });

  return (
    <button onClick={props.onClick} className={classes.button}>
      View Cart {qty}
    </button>
  );
}
export default HeaderButton;

import { useState } from "react";
import Cartcontext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateitems] = useState([]);

  const Additemtocarthandler = (item) => {
    updateitems([...items, item]);
  };
  const cartcontext = {
    items: items,
    addItem: Additemtocarthandler,
  };

  return (
    <Cartcontext.Provider value={cartcontext}>
      {props.children}
    </Cartcontext.Provider>
  );
};
export default CartProvider;

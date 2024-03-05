import React from "react";

const Cartcontext = React.createContext({
  items: [],
  totalamount: 0,
  addItem: (Item) => {},
});

export default Cartcontext;

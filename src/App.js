import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Addproduct from "./Components/Addproduct";
import CartProvider from "./Components/Store/CartProvider";
import Cart from "./Components/Header/Cart";

const App = () => {
  const [showcart, setshowcart] = useState(false);
  const hidecarthandler = () => {
    setshowcart(false);
  };
  const onshowcarthandler = () => {
    setshowcart(true);
  };
  return (
    <CartProvider>
      {showcart && <Cart onClose={hidecarthandler}></Cart>}
      <Header onshowhandler={onshowcarthandler} />
      <Addproduct></Addproduct>
    </CartProvider>
  );
};

export default App;

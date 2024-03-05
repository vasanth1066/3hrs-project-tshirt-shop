import "./App.css";
import Header from "./Components/Header/Header";
import Addproduct from "./Components/Addproduct";
import CartProvider from "./Components/Store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Addproduct></Addproduct>
    </CartProvider>
  );
};

export default App;

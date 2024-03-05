import { useState, useContext } from "react";
import classes from "./Addproduct.module.css";
import ShowItem from "./ShowItem";
import Cartcontext from "./Store/cart-context";

const Addproduct = (props) => {
  const [productName, setProductname] = useState("");
  const [productDescription, setProductdescription] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productQuantity_S, setProductquantity_S] = useState("");
  const [productQuantity_M, setProductquantity_M] = useState("");
  const [productQuantity_L, setProductquantity_L] = useState("");
  const [products, setProducts] = useState([]);

  const cartcontx = useContext(Cartcontext);

  const submitHandler = (e) => {
    e.preventDefault();
    let item = {
      productName,
      productDescription,
      productprice,
      productQuantity_S,
      productQuantity_M,
      productQuantity_L,
    };
    setProducts([...products, item]);
    cartcontx.addItem({ item });
    console.log("incontext", cartcontx);
    console.log(item);
  };

  return (
    <div>
      <form className={classes.from} onSubmit={submitHandler}>
        <div></div>
        <label>Tshirt Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductname(e.target.value)}
        ></input>
        <label>Description:</label>
        <input
          type="text"
          value={productDescription}
          onChange={(e) => setProductdescription(e.target.value)}
        ></input>
        <label>price:</label>
        <input
          type="number"
          value={productprice}
          onChange={(e) => setProductprice(e.target.value)}
        ></input>
        <div>
          <label>Quantity Available:</label>
          <input
            type="number"
            placeholder="Small"
            value={productQuantity_S}
            onChange={(e) => setProductquantity_S(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Medium"
            value={productQuantity_M}
            onChange={(e) => setProductquantity_M(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Large"
            value={productQuantity_L}
            onChange={(e) => setProductquantity_L(e.target.value)}
          ></input>
        </div>

        <button className={classes.button}>Add Product</button>
      </form>
      <div>
        {products.map((product, index) => (
          <ShowItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Addproduct;

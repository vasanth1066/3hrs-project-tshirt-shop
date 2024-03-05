// import { useState } from "react";

function ShowItem({ product }) {
  return (
    <div>
      <span>Name: {product.productName}</span>
      <span> Description: {product.productDescription}</span>
      <span> Price: {product.productprice}</span>
      <button>Buy small {product.productQuantity_S}</button>
      <button>Buy Medium {product.productQuantity_M}</button>
      <button>Buy large {product.productQuantity_L}</button>
    </div>
  );
}

export default ShowItem;

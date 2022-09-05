import React from "react";
import Product from "./product/Product";

const Products = () => {
  return (
    <div className="container_bg">
      <div className="grid grid-cols-4 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;

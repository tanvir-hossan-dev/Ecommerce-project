import React from "react";
import Product from "./product/Product";

const Products = () => {
  return (
    <div className="container_bg py-24">
      <h2 className="text-4xl font-sans pb-12">Best Selling Products</h2>
      <div className="grid grid-cols-4 gap-6">
        <Product />
        <Product />
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

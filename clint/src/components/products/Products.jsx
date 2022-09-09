import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallProducts } from "../../Redux/features/products/productsSlice";
import Product from "./product/Product";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getallProducts());
  }, [dispatch, getallProducts]);

  let content = null;

  if (isLoading) {
    content = <h2>Loading....</h2>;
  }

  if (!isLoading && isError) {
    content = <h2>{error}</h2>;
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = <h2>Product not found</h2>;
  }

  if (!isLoading && !isError && products?.length > 0) {
    content = products.map((product) => <Product product={product} key={product._id} />);
  }

  return (
    <div className="container_bg py-24">
      <h2 className="text-4xl font-sans pb-12">Best Selling Products</h2>
      <div className="grid grid-cols-4 gap-6">{content}</div>
    </div>
  );
};

export default Products;

import React from "react";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;

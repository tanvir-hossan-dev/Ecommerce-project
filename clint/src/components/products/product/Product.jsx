import React from "react";
import { Link } from "react-router-dom";
import iceCream from "../../../assets/images/icecream.png";

const Product = ({ product }) => {
  const { name, price, quantity, _id } = product;
  return (
    <div className="p-6 bg-white shadow-md shadow-gray rounded-xl">
      <Link to={`/productdeatils/${_id}`}>
        <img src={iceCream} alt="" />
      </Link>
      <h3 className=" font-sans text-2xl pt-6">{name}</h3>
      <h3 className=" font-sans text-2xl py-2">{price}</h3>
      <div className="flex justify-between">
        <div className="flex py-2 px-4 border-2 border-solid rounded-3xl w-28 justify-between">
          <button className=" text-2xl ">-</button>
          <h4 className=" text-2xl">{quantity}</h4>
          <button className="text-2xl">+</button>
        </div>
        <button>
          {/* <img src="" alt="" /> */}
          add to cart icon
        </button>
      </div>
    </div>
  );
};

export default Product;

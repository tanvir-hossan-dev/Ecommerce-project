import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redux/features/product/productSlice";
import prodctImg from "../../assets/images/icecream.png";

const ProductDeatils = () => {
  const { product, isLoading, error } = useSelector((state) => state.product);

  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(params));
  }, [dispatch, params]);

  const { name, price, quantity } = product.product || {};

  let content = null;
  if (isLoading) {
    content = <h1>Loading....</h1>;
  }

  if (!isLoading && product?.product?._id) {
    content = (
      <>
        <div className="grid grid-cols-2">
          <div className="left_side">
            <img src={prodctImg} alt="" />
          </div>
          <div className="right_side">
            <h3 className=" font-sans text-2xl pt-6">{name}</h3>
            <h3 className=" font-sans text-2xl py-2">{price}</h3>
            <div className="flex justify-between">
              <div className="flex py-2 px-4 border-2 border-solid rounded-3xl w-28 justify-between">
                <button className=" text-2xl ">-</button>
                <h4 className=" text-2xl">{quantity}</h4>
                <button className="text-2xl">+</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div className="container_bg">{content}</div>;
};

export default ProductDeatils;

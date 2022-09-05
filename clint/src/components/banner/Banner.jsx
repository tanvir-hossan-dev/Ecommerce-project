import React from "react";
import bannerIMG from "../../assets/images/banner-img.png";
import Button from "../utils/Button";

const Banner = () => {
  return (
    <div className="banner_bg relative">
      <div className="container_bg " style={{ paddingTop: "160px" }}>
        <div className="grid grid-cols-2 gap-4">
          <div className="leftside pt-16">
            <p className=" font-sans font-normal text-xl">Lorem ipsum dolor sit amet </p>
            <h2 className=" font-sans text-4xl py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laboriosam!
            </h2>
            <Button text="Sign Up" />
          </div>
          <div className="rightside absolute top-0 right-40" style={{ width: "700px" }}>
            <img src={bannerIMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

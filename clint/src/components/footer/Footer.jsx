import React from "react";
import "./footer.css";
import footerIMG from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="container_bg">
        <div className="grid grid-cols-4">
          <div>
            <h3 className=" pb-4 text-xl font-bold">Services</h3>
            <ul>
              <li className="text-white font-sans text-base">Email Marketing</li>
              <li className="text-white font-sans text-base">Campains</li>
              <li className="text-white font-sans text-base">Branding</li>
              <li className="text-white font-sans text-base">Offline</li>
            </ul>
          </div>
          <div>
            <h3 className=" pb-4 text-xl font-bold">Services</h3>
            <ul>
              <li className="text-white font-sans text-base">Email Marketing</li>
              <li className="text-white font-sans text-base">Campains</li>
              <li className="text-white font-sans text-base">Branding</li>
              <li className="text-white font-sans text-base">Offline</li>
            </ul>
          </div>
          <div>
            <h3 className=" pb-4 text-xl font-bold">Services</h3>
            <ul>
              <li className="text-white font-sans text-base">Email Marketing</li>
              <li className="text-white font-sans text-base">Campains</li>
              <li className="text-white font-sans text-base">Branding</li>
              <li className="text-white font-sans text-base">Offline</li>
            </ul>
          </div>
          <div className="pt-4">
            <img src={footerIMG} alt="footer-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

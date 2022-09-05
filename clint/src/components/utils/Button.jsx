import React from "react";

const Button = ({ text }) => {
  return (
    <button className="py-2 px-6   rounded-md text-lg text-white" style={{ background: "#688F4E" }}>
      {text}
    </button>
  );
};

export default Button;

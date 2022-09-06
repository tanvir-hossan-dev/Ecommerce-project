import React from "react";

const Input = ({ name, type, label, placeholder, value, handleOnChange }) => {
  return (
    <div className="my-2">
      <label style={{ color: "gray" }}>{label}</label>
      <input
        onChange={handleOnChange}
        name={name}
        type={type}
        required
        className="mt-2 relative block w-3/4 appearance-none rounded
                 rounded-t-md border border-gray-300 px-3 py-2
                  text-gray-900 placeholder-gray-500 focus:z-10
                   focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;

import React from "react";

const Error = ({ message }) => {
  return (
    <p
      className="mt-4 group relative flex w-3/4 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-red"
      style={{ color: "red" }}
    >
      {message}
    </p>
  );
};

export default Error;

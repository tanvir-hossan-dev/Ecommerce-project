import React from "react";

const Submitbtn = ({ text, disableBtn }) => {
  return (
    <button
      disabled={disableBtn}
      type="submit"
      className="mt-4 group relative flex w-3/4 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default Submitbtn;

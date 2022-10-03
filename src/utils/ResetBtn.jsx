import React from "react";

const ResetBtn = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="absolute  top-2 left-2 bg-red-600 text-white p-1 rounded-md px-4"
    >
      Reset
    </button>
  );
};

export default ResetBtn;

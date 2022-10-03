import React from "react";

const Input = (props) => {
  return (
    <div className="flex items-center px-2 mt-3 space-x-3">
      <label className="text-white">{props.name}:</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        min={props.min}
        max={props.max}
      />
      {props.type === "range" && (
        <span className="text-white">{props.value}</span>
      )}
    </div>
  );
};

export default Input;

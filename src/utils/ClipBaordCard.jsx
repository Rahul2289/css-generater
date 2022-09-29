import React from "react";

const ClipBaordCard = (props) => {
  return (
    <div className="p-3 text-white bg-green-700 w-11/12 m-auto min-h-min rounded-md">
      {props.children}
    </div>
  );
};

export default ClipBaordCard;

import React from "react";

const ProgressBar = (props) => {
  return (
    <>
      <div className="bg-white w-full h-12  rounded-lg">
        <div
          style={{ width: `${props.width}%` }}
          className="bg-doveOrange h-full rounded-lg text-white flex items-center justify-center	 text-lg font-semibold"
        >
          {props.width}%
        </div>
      </div>
      {/* <button onClick={() => props.increaseWidth()}>Increase Width</button> */}
    </>
  );
};

export default ProgressBar;

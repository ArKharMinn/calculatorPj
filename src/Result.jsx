import React from "react";

const Result = ({result}) => {
  return (
    <div className="d-flex justify-content-between">
      <img src="/dogHead.webp" className="col-3" />
      <h1 className="text-white">{result}</h1>
    </div>
  );
};

export default Result;

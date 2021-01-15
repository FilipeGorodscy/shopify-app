import React from "react";

const ResultsHeader = ({ debouncedValue, page, total }) => {
  return (
    <>
      <div className="four wide column">
        <br />
        <div className="four column row">
          <h2>Results for "{debouncedValue}":</h2>
        </div>
      </div>
      <div className="four wide right aligned column">
        <br />
        <div className="four column row">
          <h4>
            Page {page} of {Math.ceil(total / 10)}:
          </h4>
        </div>
      </div>
    </>
  );
};

export default ResultsHeader;

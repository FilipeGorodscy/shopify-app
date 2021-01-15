import React from "react";

const NavigationButtons = ({ setMovies, setPage, page, total }) => {
  return (
    <>
      <div
        onClick={() => {
          setMovies([]);
          setPage(page - 1);
        }}
        className={`four wide column ui button ${page <= 1 && "disable"}`}
      >
        <i className="chevron left icon" />
      </div>
      <div
        onClick={() => {
          setMovies([]);
          setPage(page + 1);
        }}
        className={`four wide column ui button ${
          page >= Math.ceil(total / 10) && "disable"
        }`}
      >
        <i className="chevron right icon" />
      </div>
    </>
  );
};

export default NavigationButtons;

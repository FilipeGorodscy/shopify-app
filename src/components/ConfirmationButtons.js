import React from "react";
import "./Disable.css";

const ConfirmationButtons = ({
  setConfirmationBanner,
  setNominatedMovies,
  nominatedMovies,
  setSearch,
}) => {
  return (
    <div className="inline">
      <div
        onClick={() => {
          if (Object.values(nominatedMovies).length === 5) {
            setSearch(false);
            setConfirmationBanner(true);
          }
        }}
        className={`ui right floated olive button ${
          Object.values(nominatedMovies).length < 5 && "disable"
        }`}
      >
        Confirm
      </div>
      <button
        onClick={() => setNominatedMovies({})}
        className="ui right floated button"
      >
        Reset
      </button>
    </div>
  );
};

export default ConfirmationButtons;

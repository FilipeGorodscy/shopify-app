import React from "react";
import "./Banner.css";
import NominationMovies from "./NominationMovies";

const ConfirmationBanner = ({
  nominatedMovies,
  onToggle,
  setConfirmationBanner,
  setSuccessBanner,
  setSearch,
}) => {
  return (
    <div className="ui placeholder segment sixteen wide column">
      <div className="ui icon header">
        <i className="question circle icon"></i>
        You have selected five movies. Are you sure these are the ones you want
        to nominate?
      </div>
      <NominationMovies onToggle={onToggle} nominatedMovies={nominatedMovies} />
      <div className="inline">
        <button
          onClick={() => {
            setSearch(true);
            setConfirmationBanner(false);
          }}
          className="ui button"
        >
          No, I want to change!
        </button>
        <button
          onClick={() => {
            setConfirmationBanner(false);
            setSuccessBanner(true);
          }}
          className="ui olive button"
        >
          Yes, I'm sure!
        </button>
      </div>
    </div>
  );
};

export default ConfirmationBanner;

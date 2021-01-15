import React from "react";

const SuccessBanner = ({
  setSuccessBanner,
  setConfirmationBanner,
  setNominatedMovies,
  setSearch,
}) => {
  const resetState = () => {
    setNominatedMovies({});
    setConfirmationBanner(false);
    setSuccessBanner(false);
    setSearch(true);
  };
  return (
    <div className="ui placeholder segment sixteen wide column">
      <div className="ui icon header">
        <i className="thumbs up circle icon"></i>
        You have nominated five movies. Thanks for your feedback.
      </div>
      <button className="ui button olive" onClick={() => resetState()}>
        Nominate it again!
      </button>
    </div>
  );
};

export default SuccessBanner;

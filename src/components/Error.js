import React from "react";

const Error = () => {
  return (
    <div>
      <h2>Movie not found</h2>
      <div className="ui negative message">
        <div className="header">We're sorry we can't find this movie.</div>
        <p>Please specify more and try again.</p>
      </div>
    </div>
  );
};

export default Error;

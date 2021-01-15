import React from "react";

import MovieItem from "./MovieItem";

const NominationMovies = ({ nominatedMovies, onToggle, children }) => {
  const renderedList = nominatedMovies.map((movie) => (
    <MovieItem
      movie={movie}
      disabled={false}
      key={movie.imdbID}
      color={"red"}
      action={"Remove"}
      onToggle={onToggle}
    />
  ));
  return nominatedMovies.length > 0 ? (
    <>
      <div className="eight wide column">
        <h2>Selected movies</h2>
        <h3>{nominatedMovies.length} of 5 selected.</h3>
        {renderedList}
        {children}
      </div>
    </>
  ) : (
    <div className="eight wide center aligned column">
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="hand point left icon"></i>
          No movies selected.
        </div>
        <h4>Please search and select movies to nominate.</h4>
      </div>
    </div>
  );
};

export default NominationMovies;

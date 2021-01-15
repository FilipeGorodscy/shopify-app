import React from "react";
import Error from "./Error";
import MovieItem from "./MovieItem";

const FetchedMovies = ({ fetchedMovies, onToggle, disabled }) => {
  const renderedList = fetchedMovies.map((movie) => (
    <MovieItem
      key={movie.imdbID}
      disabled={disabled}
      movie={movie}
      action={"Nominate"}
      color={"olive"}
      onToggle={onToggle}
    />
  ));

  if (!fetchedMovies.length) {
    return (
      <div className="eight wide center aligned column">
        <div className="ui fluid placeholder">
          <div className="paragraph">
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="paragraph">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="image"></div>
          <div className="paragraph">
            <div className="line" />

            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="paragraph">
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="image"></div>
          <div className="paragraph">
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="paragraph">
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="paragraph">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </div>
    );
  }

  if (fetchedMovies[0].error) return <Error />;

  return renderedList;
};

export default FetchedMovies;

import React from "react";
import "./MovieItem.css";

const MovieItem = ({ movie, onToggle, disabled }) => {
  const color = movie.selected ? "red" : "olive";
  const inactive = disabled && !movie.selected;
  return (
    <div
      className="ui relaxed list"
      data-tooltip={
        inactive ? "You cannot nominate more than 5 movies." : undefined
      }
    >
      <div className="item content">
        <div>
          <div className="header">{movie.Title}</div>
          <div className="description">{movie.Year}</div>
          <button
            onClick={() => onToggle(movie)}
            className={`ui ${color} button right floated movie-item 
               ${inactive && "disable"}`}
          >
            {movie.selected ? "Remove" : "Nominate"}
          </button>
        </div>
      </div>
      <hr className="bwidth" />
    </div>
  );
};

export default MovieItem;

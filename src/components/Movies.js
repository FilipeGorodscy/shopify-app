import React from "react";
import useStickyState from "../hooks/useStickyState";

import ConfirmationBanner from "./ConfirmationBanner";
import ConfirmationButtons from "./ConfirmationButtons";
import FetchedMovies from "./FetchedMovies";
import NominationMovies from "./NominationMovies";
import SuccessBanner from "./SuccessBanner";

const Movies = ({ initialMovies, total, setSearch }) => {
  const [nominatedMovies, setNominatedMovies] = useStickyState(
    {},
    "nominatedMovies"
  );
  const [confirmationBanner, setConfirmationBanner] = useStickyState(
    false,
    "ConfirmationBanner"
  );
  const [showSuccessBanner, setSuccessBanner] = useStickyState(
    false,
    "setSuccessBanner"
  );

  const fetchedMovies = initialMovies.map((movie) => ({
    ...movie,
    selected: !!nominatedMovies[movie.imdbID],
  }));

  const onToggle = (movie) => {
    const { [movie.imdbID]: prev, ...others } = nominatedMovies;
    setNominatedMovies(
      prev
        ? others
        : { ...others, [movie.imdbID]: { ...movie, selected: true } }
    );
    setConfirmationBanner(false);
    setSearch(true);
  };

  if (showSuccessBanner) {
    return (
      <SuccessBanner
        setSearch={setSearch}
        setNominatedMovies={setNominatedMovies}
        setConfirmationBanner={setConfirmationBanner}
        setSuccessBanner={setSuccessBanner}
      />
    );
  }

  if (confirmationBanner) {
    return (
      <ConfirmationBanner
        onToggle={onToggle}
        setSearch={setSearch}
        setConfirmationBanner={setConfirmationBanner}
        setSuccessBanner={setSuccessBanner}
        nominatedMovies={Object.values(nominatedMovies)}
      />
    );
  }

  return (
    <div className="ui divided grid">
      <div className="ui row">
        <div className="eight wide column">
          <FetchedMovies
            total={total}
            disabled={Object.values(nominatedMovies).length >= 5}
            onToggle={onToggle}
            fetchedMovies={fetchedMovies}
          />
        </div>

        <NominationMovies
          onToggle={onToggle}
          nominatedMovies={Object.values(nominatedMovies)}
        >
          <ConfirmationButtons
            setSearch={setSearch}
            setConfirmationBanner={setConfirmationBanner}
            setNominatedMovies={setNominatedMovies}
            nominatedMovies={nominatedMovies}
          />
        </NominationMovies>
      </div>
    </div>
  );
};

export default Movies;

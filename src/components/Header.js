import React from "react";

import NominationHeader from "./NominationHeader";
import NavigationButtons from "./NavigationButtons";
import ResultsHeader from "./ResultsHeader";

const Header = ({ debouncedValue, page, setPage, setMovies, total }) => {
  return (
    <div className="ui grid">
      <ResultsHeader
        debouncedValue={debouncedValue}
        page={page}
        total={total}
      />
      <div className="ui two column row">
        <NavigationButtons
          page={page}
          setPage={setPage}
          setMovies={setMovies}
          total={total}
        />
        <NominationHeader />
      </div>
    </div>
  );
};

export default Header;

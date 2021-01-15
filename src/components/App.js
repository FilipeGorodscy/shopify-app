import React, { useState } from "react";

import SearchBar from "./SearchBar";
import Movies from "./Movies";
import useStickyState from "../hooks/useStickyState";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useStickyState(true);
  return (
    <div className="ui container">
      <br />
      <h2 className="ui header">
        <div className="content">The Shoppies</div>
      </h2>
      {search && <SearchBar setMovies={setMovies} />}
      {<Movies setSearch={setSearch} initialMovies={movies} />}
    </div>
  );
};

export default App;

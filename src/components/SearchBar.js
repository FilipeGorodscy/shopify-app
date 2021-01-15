import React, { useState, useEffect } from "react";

import fetchMovies from "../apis/fetchMovies";
import useStickyState from "../hooks/useStickyState";
import Header from "./Header";

const SearchBar = ({ setMovies }) => {
  const [term, setTerm] = useStickyState("Harry Potter");
  const [debouncedValue, setDebouncedValue] = useState(term);
  const [page, setPage] = useStickyState(1, "page");
  const [total, setTotal] = useStickyState(0, "total");

  useEffect(() => {
    const search = async (term) => {
      const { data } = await fetchMovies(term, page);

      if (data.Search) {
        setMovies(data.Search);
        setTotal(data.totalResults);
      }
      if (data.Error) {
        setMovies([{ error: 1 }]);
        setTotal(0);
      }
    };
    const handler = setTimeout(() => {
      setDebouncedValue(term);
      search(term);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [term, debouncedValue, setMovies, setTotal, page]);

  return (
    <div>
      <div className="ui segment search-bar">
        <form onSubmit={(e) => e.preventDefault()} className="ui form">
          <div className="field">
            <label>Search for a movie</label>
            <input
              value={term}
              type="text"
              onChange={(e) => {
                setTerm(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </form>
      </div>
      {debouncedValue && total > 0 && (
        <Header
          debouncedValue={debouncedValue}
          page={page}
          setPage={setPage}
          total={total}
          setMovies={setMovies}
        />
      )}
      <br />
      <br />
    </div>
  );
};

export default SearchBar;

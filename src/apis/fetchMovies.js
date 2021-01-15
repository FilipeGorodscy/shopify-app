import omdb from "./omdb";

const KEY = process.env.REACT_APP_SHOPIFY_API_KEY;
const fetchMovies = (term, page) =>
  omdb.get(`/?apikey=${KEY}`, {
    params: {
      s: term,
      type: "movie",
      page: page,
    },
  });
export default fetchMovies;

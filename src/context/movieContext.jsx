import { createContext, useState, useEffect } from "react";
import { API_POPULAR, API_SEARCH } from "../data/api";

export const MovieContext = createContext();

export function MovieContextProvider(props) {
  const [popularMovies, setPopularMovies] = useState([]);

  async function searchMovie(query) {
    try {
      if (query === "") {
        console.log("Input empty");
      } else {
        const url = API_SEARCH + "=" + query.replaceAll(" ", "%20");
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        setPopularMovies(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch(API_POPULAR)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPopularMovies(data.results);
      });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        searchMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

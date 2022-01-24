import Moviecard from "./Moviecard";
import React, { useState, useEffect } from "react";
import { getMoviesBySearchTerm } from "../getmovie";
import Searchbar from "./Searchbar";

const MovieList = ({ onclicked }) => {
  const [searchTerm, setsearchTerm] = useState("batman");
  const [isLoading, setisLoading] = useState(false);
  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [movieDetail, setmoviesDetail] = useState([]);
  const [moviesearchstring, setmoviesearchstring] = useState("");
  const [moviesearchtype, setmoviesearchtype] = useState("");
  //     const onchangestring=(event)=>{
  //         console.log(event.target)
  //         setsearchTerm(event.target.value)
  //     }
  //     const onchangetype=(event)=>{
  //         console.log(event.target)
  //         setmoviesearchtype(event.target.value)
  //     }
  //     console.log(moviesearchstring)
  //     console.log(moviesearchtype)

  console.log(searchTerm);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  useEffect(() => {
    getMoviesBySearchTerm(searchTerm)
      .then((movie) => {
        setmovies(movie.Search);
      })
      .catch((error) => {
        setmovies([]);
      });
  }, [searchTerm]);

  console.log(movies);
  return (
    <div className="movie_list">
      {/* <Searchbar onchangestring={onchangestring} onchangetype={onchangetype}/> */}
      {movies ? (
        movies.map((EachMovie, i) => (
          <Moviecard
            key={i}
            posterUrl={EachMovie.Poster}
            title={truncate(EachMovie.Title, 12)}
            type={"movie"}
            buttononclick={onclicked}
            movieId={EachMovie.imdbID}
          />
        ))
      ) : (
        <p>Searching for a movie...</p>
      )}
    </div>
  );
};
export default MovieList;

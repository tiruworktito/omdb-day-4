const API_URL = "https://www.omdbapi.com/";
export const getMoviesById = async (movie_id) => {
  const url = `${API_URL}?apikey=${process.env.REACT_APP_OMDBAPI}&i=${movie_id}`;
  const response = await fetch(url);
  const movie = await response.json();
  // console.log(movie)
  return movie;
};
// console.log(getMoviesByname("batman"))
// const getMovieDetailsById =async(movie_id)=>{
//     await fetch(`http://www.omdbapi.com/?apikey=e09119f4&i=${movie_id}`)
//    .then((res)=>res.json())
//    .then((movie_detail)=>console.log(movie_detail))

//    }
//    getMovieDetailsById("tt0096895")

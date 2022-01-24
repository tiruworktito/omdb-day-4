const OMBD_API_KEY='434209ee'
const API_URL = "https://www.omdbapi.com/";
export const getMoviesBySearchTerm = async (title) => {
  const url = `${API_URL}?apikey=${process.env.REACT_APP_OMDBAPI}&s=${title}&page=3`;
  const response = await fetch(url);
  const movie = await response.json();
  // console.log(movie)
  return movie;
};

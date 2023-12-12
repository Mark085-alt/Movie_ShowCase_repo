import axios from "axios";

const API_KEY = "e2639edad781f865a10d0a7f91dc5001";


export async function search_movie(MidURL,LastURL="") {
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/search/movie?query=${movie_name}&api_key=${API_KEY}`
  // );

  // const result = await response.json();
  // console.log(result);

return await axios.get(
    `https://api.themoviedb.org/3/${MidURL}&api_key=${API_KEY}${LastURL}`
  )

}

// const popular = "movie/popular?laguage=en-US&page=1";
// search_movie(popular);

// export default search_movie;

import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=da36feb63eaaa09d19d7bec78ef1c818
const API_KEY = 'da36feb63eaaa09d19d7bec78ef1c818';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovie(endPoint) {
  try {
    const response = await axios.get(
      `${BASE_URL}${endPoint}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    alert(error.message);
  }
}
export default fetchMovie;

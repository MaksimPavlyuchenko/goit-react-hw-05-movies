import axios from 'axios';

const API_KEY = 'da36feb63eaaa09d19d7bec78ef1c818';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovie = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    alert(error.message);
  }
};

export const fetchMovieId = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    alert(error.message);
  }
};

export const fetchMovieDescription = async (id, description) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/${description}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    alert(error.message);
  }
};

export const searchFetch = async details => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${details}&api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    alert(error.message);
  }
};

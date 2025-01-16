import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com/search/shows';

export const getAllMovies = async () => {
  const response = await axios.get(`${BASE_URL}?q=all`);
  return response.data;
};

export const searchMovies = async (searchTerm) => {
  const response = await axios.get(`${BASE_URL}?q=${searchTerm}`);
  return response.data;
};

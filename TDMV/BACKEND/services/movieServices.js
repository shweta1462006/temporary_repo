const axios = require("axios");

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

async function searchMovies(query) {
  try {
    const res = await axios.get(BASE_URL + "/search/movie", {
      params: {
        query,
        api_key: API_KEY,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieDetails(id) {
  try {
    const res = await axios.get(BASE_URL + "/movie/" + id, {
      params: {
        api_key: API_KEY,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function getPopularMovies() {
  try {
    const res = await axios.get(BASE_URL + "/movie/popular", {
      params: {
        api_key: API_KEY,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function discoverMovies(params) {
  try {
    const res = await axios.get(BASE_URL + "/search/movie", {
      params: {
        api_key: API_KEY,
        ...params,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
  getPopularMovies,
  discoverMovies,
};
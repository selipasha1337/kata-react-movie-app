import axios from 'axios'

class MoviesService {
  static API_URL = 'https://api.themoviedb.org/3/'

  static async getMovies() {
    const response = await axios.get(`${this.API_URL}discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    })

    return response.data.results
  }

  static async getSearchedMovies(query) {
    const response = await axios.get(`${this.API_URL}search/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: query,
      },
    })

    return response.data.results
  }

  static async getTags() {
    const response = await axios.get(`${this.API_URL}genre/movie/list`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    })

    return response.data.genres
  }
}

export default MoviesService

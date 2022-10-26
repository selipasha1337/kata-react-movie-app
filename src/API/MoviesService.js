import axios from 'axios'

class MoviesService {
  static API_URL = 'https://api.themoviedb.org/3/'

  static async getMovies(currentPage = 1) {
    const response = await axios.get(`${this.API_URL}discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: currentPage,
      },
    })
    return response.data
  }

  static async getSearchedMovies(query, currentPage = 1) {
    const response = await axios.get(`${this.API_URL}search/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: query,
        page: currentPage,
      },
    })
    return response.data
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

import './App.css'
import { useEffect, useState } from 'react'

import Container from './components/UI/Container/Container'
import MoviesTabs from './components/MoviesTabs/MoviesTabs'
import MoviesSearch from './components/MoviesSearch/MoviesSearch'
import MoviesCardList from './components/MoviesCardList/MoviesCardList'
import MoviesPagination from './components/MoviesPagination/MoviesPagination'
import MoviesService from './API/MoviesService'

// TODO: tags to react.context

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [isMoviesLoading, setIsMoviesLoading] = useState(false)
  const [tags, setTags] = useState(null)

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsMoviesLoading(true)
        if (search) {
          const searched = await MoviesService.getSearchedMovies(search)
          setMovies(searched)
        } else {
          const movies = await MoviesService.getMovies()
          setMovies(movies)
        }
      } catch (e) {
        console.log(e.message)
      } finally {
        setIsMoviesLoading(false)
      }
    }

    void fetchMovies()
  }, [search])

  useEffect(() => {
    async function getTags() {
      const tags = await MoviesService.getTags()
      setTags(tags)
    }

    void getTags()
  }, [])

  return (
    <div className="App">
      <Container>
        <MoviesTabs />
        <MoviesSearch setSearch={setSearch} />
        <MoviesCardList movies={movies} loading={isMoviesLoading} tags={tags} />
        <MoviesPagination />
      </Container>
    </div>
  )
}

export default App

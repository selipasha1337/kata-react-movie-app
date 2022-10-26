import './App.css'
import { useEffect, useState } from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Alert } from 'antd'

import Container from './components/UI/Container/Container'
import MoviesTabs from './components/MoviesTabs/MoviesTabs'
import MoviesSearch from './components/MoviesSearch/MoviesSearch'
import MoviesCardList from './components/MoviesCardList/MoviesCardList'
import MoviesPagination from './components/MoviesPagination/MoviesPagination'
import MoviesService from './API/MoviesService'
import { TagsContext } from './context'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [isMoviesLoading, setIsMoviesLoading] = useState(false)
  const [error, setError] = useState(null)
  const [tags, setTags] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsMoviesLoading(true)
        if (search) {
          const searchedMovies = await MoviesService.getSearchedMovies(search, pageNumber)
          setMovies(searchedMovies.results)
          setTotalPages(searchedMovies.total_pages)
        } else {
          const movies = await MoviesService.getMovies(pageNumber)
          setMovies(movies.results)
          setTotalPages(movies.total_pages)
        }
      } catch (e) {
        setError(e)
      } finally {
        setIsMoviesLoading(false)
      }
    }

    void fetchMovies()
  }, [pageNumber, search])

  return (
    <div className="App">
      <Offline>
        <Alert
          type="error"
          message="Error!"
          description="You're offline! Please check your internet connection"
          style={{ margin: 24 }}
        />
      </Offline>
      <Online>
        <Container>
          <MoviesTabs />
          <MoviesSearch setSearch={setSearch} />
          <TagsContext.Provider value={{ tags, setTags }}>
            <MoviesCardList movies={movies} loading={isMoviesLoading} error={error} />
          </TagsContext.Provider>
          <MoviesPagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
        </Container>
      </Online>
    </div>
  )
}

export default App

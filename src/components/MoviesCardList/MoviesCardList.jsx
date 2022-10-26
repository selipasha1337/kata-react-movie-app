import { Row, Spin, Empty, Alert, Col } from 'antd'

import MoviesCard from '../MoviesCard/MoviesCard'

import styles from './MoviesCardList.module.css'

function MoviesCardList({ movies, loading, error }) {
  const renderMovies = () => {
    return movies.map((movie) => {
      return <MoviesCard movie={movie} key={movie.id} />
    })
  }

  return (
    <div className={styles.moviesCardList}>
      <Row>
        <Col span={24}>
          {error && <Alert type="error" message={error.code} description={error.message} />}
          {!movies.length && !loading && !error && (
            <Empty description="No Movies Found" className={styles.moviesCardList__empty} />
          )}
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 0, lg: 36 },
          { xs: 20, sm: 20, lg: 34 },
        ]}
      >
        {loading ? <Spin size="large" className={styles.moviesCardList__loading} /> : renderMovies()}
      </Row>
    </div>
  )
}

export default MoviesCardList

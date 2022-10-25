import styles from './MoviesScore.module.css'

function MoviesScore({ value }) {
  const movieScoreClassFormat = (score) => {
    return `
        ${styles.moviesScore}
        ${score <= 3 ? `${styles.moviesScore_low}` : ''}
        ${score > 3 && score <= 5 ? `${styles.moviesScore_belowAverage}` : ''}
        ${score > 5 && score <= 7 ? `${styles.moviesScore_average}` : ''}
        ${score > 7 ? `${styles.moviesScore_high}` : ''}
      `
  }

  return (
    <div className={movieScoreClassFormat(value)}>
      <span>{value}</span>
    </div>
  )
}

export default MoviesScore

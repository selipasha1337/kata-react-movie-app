import { Pagination } from 'antd'

import styles from './MoviesPagination.module.css'

function MoviesPagination() {
  return (
    <div className={styles.moviesPagination}>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}

export default MoviesPagination

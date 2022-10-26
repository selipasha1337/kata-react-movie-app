import { Pagination } from 'antd'

import styles from './MoviesPagination.module.css'

function MoviesPagination({ pageNumber, setPageNumber, totalPages }) {
  const onChange = (page) => {
    setPageNumber(page)
  }

  const totalPageFormat = (pagesCount) => {
    return pagesCount * 10 > 500 ? 5000 : pagesCount * 10
  }

  return (
    <div className={styles.moviesPagination}>
      <Pagination
        defaultCurrent={1}
        current={pageNumber}
        total={totalPageFormat(totalPages)}
        showSizeChanger={false}
        hideOnSinglePage
        onChange={onChange}
      />
    </div>
  )
}

export default MoviesPagination

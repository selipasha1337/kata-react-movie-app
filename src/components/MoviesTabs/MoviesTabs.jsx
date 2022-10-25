import { Tabs } from 'antd'

import styles from './MoviesTabs.module.css'

function MoviesTabs() {
  return (
    <div className={styles.moviesTabs}>
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: 'Search',
            key: '1',
          },
          {
            label: 'Rated',
            key: '2',
          },
        ]}
      />
    </div>
  )
}

export default MoviesTabs

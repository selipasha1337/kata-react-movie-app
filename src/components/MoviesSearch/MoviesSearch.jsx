import { Input } from 'antd'
import { debounce } from 'lodash'

function MoviesSearch({ setSearch }) {
  const handleChange = debounce((e) => {
    setSearch(e.target.value.trim())
  }, 500)

  return <Input placeholder="Type to search..." size="large" onChange={handleChange} />
}

export default MoviesSearch

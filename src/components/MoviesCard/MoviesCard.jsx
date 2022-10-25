import { Col, Typography, Tag, Rate, Image } from 'antd'
import { format, parseISO } from 'date-fns'

import MoviesScore from '../MoviesScore/MoviesScore'

import noPosterAvailable from './images/no-poster.jpg'

import './MoviesCard.css'

const { Title, Text } = Typography

function MoviesCard({ movie, tags }) {
  const dateFormat = (date) => {
    return date ? format(parseISO(date), 'MMMMMM d, yyyy') : null
  }

  const textFormat = (data, length) => {
    if (!data) {
      return <Text italic>No overview found</Text>
    } else if (!data || data.length > length) {
      return data.substring(0, (data + ' ').lastIndexOf(' ', length)) + ' ...'
    }

    return data
  }

  const renderMovieTags = tags && tags.filter((tag) => movie.genre_ids.includes(tag.id))

  return (
    <Col className="gutter-row" xs={24} lg={12}>
      <div className="moviesCard">
        <MoviesScore value={movie.vote_average} />
        <Image
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : ''}
          fallback={noPosterAvailable}
          rootClassName="moviesCard__cover"
          preview={false}
        />
        <div className="moviesCard__info">
          <Title level={4} className="moviesCard__title">
            {movie.original_title}
          </Title>
          <Text type="secondary">{dateFormat(movie.release_date)}</Text>
          <div className="moviesCard__tags">
            {tags &&
              renderMovieTags.map((tag) => (
                <Tag key={tag.id} className="moviesCard__tag">
                  {tag.name}
                </Tag>
              ))}
          </div>
        </div>
        <div className="moviesCard__desc">
          <Text>{textFormat(movie.overview, 190)}</Text>
          <div className="moviesCard__rating">
            <Rate allowHalf defaultValue={0} count={10} />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default MoviesCard
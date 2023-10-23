import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, poster, title, summary, genre }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genre.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

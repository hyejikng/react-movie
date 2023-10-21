import PropTypes from 'prop-types';

function Movie({ id, poster, title, summary, genre }) {
  return (
    <div>
      <img src={poster} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genre.map((item) => (
          <li>{item}</li>
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

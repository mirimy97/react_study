import PropTypes from "prop-types";
// Link : 새로고침 없이 Router간 이동
import { Link } from "react-router-dom";

// parent component로부터 props 받아오기
function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} />
      {/* <Link to=""> : 라우터 이동 */}
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

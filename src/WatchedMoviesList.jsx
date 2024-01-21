import WatchedMovie from "./WatchedMovie";
import PropTypes from "prop-types";

WatchedMoviesList.propTypes = {
  watched: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteWatched: PropTypes.func,
};

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched}/>
      ))}
    </ul>
  );
}

export default WatchedMoviesList;

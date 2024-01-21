import Movie from "./Movie";
import PropTypes from "prop-types";

MovieList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie}/>
      ))}
    </ul>
  );
}

export default MovieList;

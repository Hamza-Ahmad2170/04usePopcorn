import PropTypes from "prop-types";
import { useRef } from "react";
import  useKey  from "./Custom hooks/useKey";

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

   useKey("enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;

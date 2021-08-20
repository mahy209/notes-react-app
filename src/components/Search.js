import { useCallback, useMemo } from "react";
import debounce from "lodash.debounce";

const Search = ({ setSearchText }) => {
  const onChange = useCallback(
    (event) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );
  const debouncedSearch = useMemo(() => debounce(onChange, 500), [onChange]);

  return (
    <div className="search">
      <div className="cntr-innr">
        <label className="search-label" htmlFor="inpt_search">
          <input
            className="search-bar"
            onChange={debouncedSearch}
            type="text"
          />
        </label>
      </div>
    </div>
  );
};

export default Search;

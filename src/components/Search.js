import React from "react";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <div className="cntr-innr">
        <label className="search-label" htmlFor="inpt_search">
          <input
            className="search-bar"
            onChange={(event) => handleSearchNote(event.target.value)}
            type="text"
          />
        </label>
      </div>
    </div>
  );
};

export default Search;

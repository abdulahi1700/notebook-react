import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handlesearch }) {
  return (
    <div className="search">
      <MdSearch size="1.3em" />
      <input
        type="text"
        placeholder="type here..."
        onChange={(e) => handlesearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

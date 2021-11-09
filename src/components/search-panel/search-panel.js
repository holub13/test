import React from "react";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import "../search-panel/search-panel.css";

function SearchPanel({ searchUpdate, filter }) {
  function onUpdateSearch(e) {
    const newTerm = e.target.value;
    searchUpdate(newTerm);
  }

  return (
    <div className="search-panel d-flex">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={onUpdateSearch}
      />
      <PostStatusFilter filter={filter} />
    </div>
  );
}
export default SearchPanel;

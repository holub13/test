import React from "react";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import "../search-panel/search-panel.css";

const SearchPanel = () => {
  return (
    <div className="search-panel d-flex">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
      />
      <PostStatusFilter />
    </div>
  );
};
export default SearchPanel;

import React from "react";
import "../app-header/app-header.css";

function AppHeader({ liked, allPosts, important }) {
  return (
    <div className="app-header d-flex">
      <h1>Ivan Holub</h1>
      <h2>
        <b>{allPosts}</b> поста, из них понравилось <b>{liked}</b>, выжных{" "}
        <b>{important}</b>
      </h2>
    </div>
  );
}

export default AppHeader;

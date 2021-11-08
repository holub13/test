import React from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";

function App() {
  const data = [
    { label: "Going to learn React", important: true, id: "qweqwe" },
    { label: "That's Ok", important: false, id: "qdfg" },
    { label: "I wanna change my life...", important: false, id: "vbnvbn" }
  ];

  return (
    <div className="app">
      <AppHeader />
      <SearchPanel />
      <PostList posts={data} />
    </div>
  );
}

export default App;

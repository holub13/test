import React from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <SearchPanel />
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;

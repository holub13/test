import React, { useState } from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
// import "../post-list-item/post-list-item.css";

export default function App() {
  const [data, setData] = useState([
    {
      label: "Going to learn React",
      important: false,
      like: false,
      id: "qweqwe"
    },
    {
      label: "That's Ok",
      important: false,
      like: false,
      id: "qdfg"
    },
    {
      label: "I wanna change my life...",
      like: false,
      important: false,
      id: "vbnvbn"
    }
  ]);
  let classNames = "app-list-item d-flex justify-content-between";

  const addPost = () => {
    const newData = [
      ...data,
      { label: "value", important: false, like: false, id: Math.random() }
    ];
    setData(newData);
  };

  const deletePost = (id) => {
    const filteredList = data.filter((item) => item.id !== id);
    setData(filteredList);
  };

  function onToggleImportant(id) {
    const index = data.findIndex((elem) => elem.id === id);
    const old = data[index];
    const importantPost = { ...old, important: !old.important };
    const newData = [
      ...data.slice(0, index),
      importantPost,
      ...data.slice(index + 1)
    ];
    setData(newData);
  }
  function onToggleLike(id) {
    const index = data.findIndex((elem) => elem.id === id);
    const old = data[index];
    const likedPost = { ...old, like: !old.like };
    const newData = [
      ...data.slice(0, index),
      likedPost,
      ...data.slice(index + 1)
    ];
    setData(newData);
  }
  const liked = data.filter((item) => item.like).length;
  const important = data.filter((item) => item.important).length;
  const allPosts = data.length;

  return (
    <div className="app">
      <AppHeader liked={liked} important={important} allPosts={allPosts} />
      <SearchPanel />
      <PostList
        posts={data}
        onDeletePost={deletePost}
        onAddPost={addPost}
        onToggleImportant={onToggleImportant}
        onToggleLike={onToggleLike}
        classNames={classNames}
      />
    </div>
  );
}

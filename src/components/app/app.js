import React, { useState } from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

export default function App() {
  const [state, setData] = useState({
    data: [
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
    ],
    term: "",
    filter: "all"
  });
  let classNames = "app-list-item d-flex justify-content-between";
  const { data, term, filter } = state;
  const addPost = (value) => {
    const newData = [
      ...data,
      { label: value, important: false, like: false, id: Math.random() }
    ];
    setData({ data: newData, term, filter });
  };

  const deletePost = (id) => {
    const filteredList = data.filter((item) => item.id !== id);
    setData({ data: filteredList, term, filter });
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
    setData({ data: newData, term, filter });
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
    setData({ data: newData, term, filter });
  }
  const liked = data.filter((item) => item.like).length;
  const important = data.filter((item) => item.important).length;
  const allPosts = data.length;

  function searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    const newData = items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
    return newData;
  }
  const visiblePosts = filterPost(searchPost(data, term), filter);

  function onSearch(text) {
    setData({ data, term: text, filter });
  }

  function filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    }
    if (filter === "important") {
      return items.filter((item) => item.important);
    } else {
      return items;
    }
  }
  function onFilterSelect(filter) {
    setData({ data, term, filter });
  }

  return (
    <div className="app">
      <AppHeader liked={liked} important={important} allPosts={allPosts} />
      <SearchPanel
        filter={filter}
        searchUpdate={onSearch}
        onFilterSelect={onFilterSelect}
      />
      <PostList
        posts={visiblePosts}
        onDeletePost={deletePost}
        onToggleImportant={onToggleImportant}
        onToggleLike={onToggleLike}
        classNames={classNames}
      />
      <PostAddForm onAddNewPost={addPost} /*onValueChange={onValueChange}*/ />
    </div>
  );
}

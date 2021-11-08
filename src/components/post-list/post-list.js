import React, { useState } from "react";
import "./post-list.css";
import PostListItem from "../post-list-item/post-list-item";
import PostAddForm from "../post-add-form/post-add-form";

const PostList = ({ posts }) => {
  const [postList, setPostList] = useState(posts);
  const deletePost = (id) => {
    const filteredList = postList.filter((item) => item.id !== id);
    setPostList(filteredList);
  };
  // let value = "sdf";
  const addPost = (value) => {
    const newList = [
      ...postList,
      { label: "value", important: false, id: Math.random() }
    ];
    setPostList(newList);
  };

  // const elements = posts.map((item) => {
  //   const { id, ...itemProps } = item;
  //   console.log()
  //   return (
  //     <li key={id} className="list-group-item">
  //       <PostListItem item={item} onHahdleClick={deletePost} />
  //       {/* <PostListItem label={item.label} important={item.important} /> */}
  //     </li>
  //   );
  // });
  // return <ul className="app-list list-group">{elements}</ul>;
  return (
    <>
      <ul>
        {postList.map((item, index) => {
          return (
            <PostListItem
              key={`${item.id}-${index}`}
              item={item}
              onHahdleClick={deletePost}
            />
          );
        })}
      </ul>
      <PostAddForm onAddPost={() => addPost()} /*text={value}*/ />
    </>
  );
};

export default PostList;

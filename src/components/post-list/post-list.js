import React from "react";
import "./post-list.css";
import PostListItem from "../post-list-item/post-list-item";
import PostAddForm from "../post-add-form/post-add-form";

const PostList = ({
  posts,
  onDeletePost,
  onAddPost,
  onToggleImportant,
  onToggleLike,
  classNames
}) => {
  return (
    <>
      <ul>
        {posts.map((item) => {
          return (
            <PostListItem
              key={item.id}
              item={item}
              onHahdleClick={onDeletePost}
              onToggleImportant={onToggleImportant}
              onToggleLike={onToggleLike}
              classNames={classNames}
            />
          );
        })}
      </ul>
      <PostAddForm onAddNewPost={() => onAddPost()} />
    </>
  );
};

export default PostList;

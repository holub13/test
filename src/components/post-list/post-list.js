import React from "react";
import "./post-list.css";
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({
  posts,
  onDeletePost,
  onToggleImportant,
  onToggleLike,
  classNames
}) => {
  return (
    <>
      <ul className="list-group">
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
    </>
  );
};

export default PostList;

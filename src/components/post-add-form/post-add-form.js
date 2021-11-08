import React from "react";
import "./post-add-form.css";

const PostAddForm = ({ onAddPost, text }) => {
  // console.log(text);
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Чем хочешь поделиться?"
        className="form-control new-post-lable"
        // onChange={text}
      />
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={onAddPost}
      >
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;

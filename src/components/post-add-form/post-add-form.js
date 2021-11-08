import React from "react";
import "./post-add-form.css";

const PostAddForm = ({ onAddNewPost }) => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Чем хочешь поделиться?"
        className="form-control new-post-lable"
        // onChange={label}
      />
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={onAddNewPost}
      >
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;

import React, { useState } from "react";
import "./post-add-form.css";

export default function PostAddForm({ onAddNewPost }) {
  const [value, setValue] = useState({ label: "" });
  function onValueChange(e) {
    setValue({
      label: e.target.value
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    onAddNewPost(value.label);
    setValue({
      label: ""
    });
  }

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Чем хочешь поделиться?"
        className="form-control new-post-lable"
        onChange={onValueChange}
        value={value.label}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
}

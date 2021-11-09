import React from "react";

export default function PostStatusFilter({ filter }) {
  console.log(filter);
  const buttons = [
    { name: "all", label: "All" },
    { name: "like", label: "Likes" }
  ];
  const btn = buttons.map(({ name, label }) => {
    return (
      <button key={name} type="button" className="btn btn-primary">
        {label}
      </button>
    );
  });
  return (
    <div className="btn-group">
      {btn}
      {/* <button type="button" className="btn btn-primary">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Likes
      </button> */}
    </div>
  );
}

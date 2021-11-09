import React from "react";

export default function PostStatusFilter({ filter, onFilterSelect }) {
  const buttons = [
    { name: "all", label: "All" },
    { name: "like", label: "Like" },
    { name: "important", label: "Important" }
  ];
  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => {
        const active = filter === name;
        const activeClass = active ? "btn-primary" : "btn-outline-secondary";
        return (
          <button
            key={name}
            type="button"
            className={`btn ${activeClass}`}
            onClick={() => onFilterSelect(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

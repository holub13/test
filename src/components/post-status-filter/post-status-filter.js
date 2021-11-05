import React from "react";

export default function PostStatusFilter() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-primary">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Likes
      </button>
    </div>
  );
}

import React from "react";
import "./filters.scss";

export const Filters = () => {
  return (
    <div className="filters">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

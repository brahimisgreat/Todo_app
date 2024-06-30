import React from "react";
import moon from "../assets/images/icon-moon.svg";
import todo from "../assets/images/TODO 2.svg";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="todo-container">
        <img id="" src={todo} />
      </div>
      <div className="moon">
        <img src={moon} />
      </div>
    </div>
  );
};

import React from "react";
import "./Completed.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Todo } from "./Todo";
import { themeContext } from "./Themecontext";
import { useContext } from "react";

export const Completed = () => {
  const [completed, setCompleted] = useState([]);
  const [items, setItems] = useState(0);

  const { darkMode } = useContext(themeContext);


  useEffect(() => {
    axios
      .get("http://localhost:3000/allCompleted")
      .then((res) => {
        setCompleted(res.data);
        setItems(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(completed);

  return (
    <div className="list">
      <div className="tasks">
        {completed.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo task={todo.item} ids={todo.id} completed={todo.Completed} />
            </div>
          );
        })}
      </div>
      <div className={darkMode ? "itemsDark" : "items"}>
        <p>{items} items left</p>
        <div className='links'>
          <Link to="/">All</Link>
          <Link to="/active">Active</Link>
          <Link to="/completed">Completed</Link>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

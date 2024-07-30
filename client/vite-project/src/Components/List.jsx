import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "./Todo";
import "./List.scss";

export const List = () => {
  const [todos, setTodos] = useState([]);
  const [items, setItems] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => {
        setTodos(res.data);
        setItems(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="list">
      <div className="tasks">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo task={todo.item} ids={todo.id} />
            </div>
          );
        })}
      </div>
      <div className="items">
        <p>{items} items left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

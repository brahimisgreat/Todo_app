import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "./Todo";

export const List = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>

    {todos.map((todo)=> {
        return <div key={todo.id}>
            <Todo task={todo.item} id={todo.id} />
        </div>
    })}
  </div>;
};

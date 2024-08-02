import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Todo } from "./Todo";
import "./List.scss";
import { themeContext } from "./Themecontext";
import { Link } from "react-router-dom";
export const List = () => {
  const [todos, setTodos] = useState([]);
  const [items, setItems] = useState(0);

  const { darkMode } = useContext(themeContext);

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
      <div className={darkMode ? "itemsDark" : "items"}>
        <p>{items} items left</p>
        <div>
          <Link to="/">All</Link>
          <Link to="active">Active</Link>
          <Link to="completed">Completed</Link>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

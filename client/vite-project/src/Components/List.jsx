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

        console.log(res.data);
        console
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function ClearCompleted(){
    axios.delete('http://localhost:3000/clearCompleted')
    .then(res => {
      console.log(res)
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div className="list">
      <div className="tasks">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo todos={todos} task={todo.item} ids={todo.id} completed={todo.Completed}  />
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
        <button  onClick={ClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

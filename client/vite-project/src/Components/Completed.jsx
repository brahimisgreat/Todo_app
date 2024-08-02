import React from "react";
import "./Completed.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Completed = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allCompleted")
      .then((res) => {
        setCompleted(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(completed);

  return (
    <div>
      <div>
        {completed.map((task) => {
          return (
            <div key={task.id} className="task">
              <p>{task.item}</p>
            </div>
          );
        })}
      </div>
      <Link to="/">All</Link>
      <Link to="active">Active</Link>
      <Link to="completed">Completed</Link>
    </div>
  );
};

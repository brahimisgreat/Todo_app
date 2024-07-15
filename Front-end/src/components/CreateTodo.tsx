import "./CreateTodo.scss";
import { useState } from "react";
import circle from "../assets/images/circle.svg";
import axios from "axios";

export const CreateTodo = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/create", todo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createTodo">
      <form onClick={handleSubmit}>
        <button type="submit" />
        <img src={circle} />

        <input
          type="text"
          placeholder="Create a new todo..."
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

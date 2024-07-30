import { useState } from "react";
import axios from "axios";
import './Create.scss';
import circle from "../assets/assets/circle.svg";

export const Create = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   await axios
      .post("http://localhost:3000/create/", { item: task })
      .then((res) => {
        setTask("");
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div className="create">
      <img src={circle} alt="circle" onClick={handleSubmit} />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Create a new todo..."
        required
      />
    </div>
  );
};

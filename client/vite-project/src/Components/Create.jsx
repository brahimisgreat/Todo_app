import { useState } from "react";
import axios from "axios";
import './Create.scss';
import circle from "../assets/assets/circle.svg";
import { useContext } from "react";
import { themeContext } from "./Themecontext";
import circleDark from '../assets/assets/Oval Copy.svg'

export const Create = () => {
  const [task, setTask] = useState("");

  const {darkMode} = useContext(themeContext);

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
    <div className={darkMode? 'createDark': 'create'}>
      <img src={darkMode? circleDark : circle} alt="circle" onClick={handleSubmit} />
      <input  className={darkMode? 'inputDark' : 'input'}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Create a new todo..."
        required
      />
    </div>
  );
};

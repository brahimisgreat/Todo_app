import { useState } from "react";
import axios from "axios";
import './Create.scss';
import circle from "../assets/assets/circle.svg";
import { useContext } from "react";
import { themeContext } from "./Themecontext";
import circleDark from '../assets/assets/Oval Copy.svg'
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [task, setTask] = useState("");

  const {darkMode} = useContext(themeContext);
  const Navigate = useNavigate()

  const handleSubmit =  (e) => {
    e.preventDefault();
     axios
      .post("http://localhost:3000/create/", { item: task })
      .then((res) => {
        setTask("");
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
      Navigate('/')
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

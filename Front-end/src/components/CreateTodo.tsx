import "./CreateTodo.scss";
import { useState } from "react";
import circle from "../assets/images/circle.svg";
import axios from "axios";

export const CreateTodo = () => {
  const [todo, setTodo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      await axios.post("http://Localhost:5000/create", todo);
      console.log("Todo created");
    }catch(err){
      console.log(err);
    }

  }
  
  console.log(todo);
  return (
    <div className="createTodo">
      <form onSubmit={handleSubmit}>
        <button type="submit">button</button>
        
        

        <input
          type="text"
          placeholder="Create a new todo..."
          value={todo}
          name="todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

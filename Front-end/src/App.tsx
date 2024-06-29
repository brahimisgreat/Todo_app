import "./App.scss";
import bg from "./assets/images/bg-mobile-light.jpg";
import { CreateTodo } from "./components/CreateTodo";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { useState } from "react";

function App() {

  const [checked, setChecked] = useState(false)
  return (
      <div className="app">
        <div className="hero">
          <img src={bg} alt="background image" />
        </div>
        <Header />
        <CreateTodo />
        <Todo  checked={checked} setChecked={setChecked}/>
      </div>
  );
}

export default App;

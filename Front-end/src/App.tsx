import "./App.scss";
import bg from "./assets/images/bg-mobile-light.jpg";
import { CreateTodo } from "./components/CreateTodo";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <img src={bg} alt="background image" />
      </div>
      <div className="content">
        <Header />
        <CreateTodo />
        <List   />
        <Filters />
      </div>
    </div>
  );
}

export default App;

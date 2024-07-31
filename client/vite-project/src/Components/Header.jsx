import todo from "../assets/assets/todo.svg";
import moon from "../assets/assets/icon-moon.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <img className="todo-img" src={todo} alt="todo" />
      <img  className='moon' src={moon} alt="moon" />
    </header>
  );
};

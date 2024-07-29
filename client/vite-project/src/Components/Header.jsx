import todo from "../assets/assets/todo.svg";
import moon from "../assets/assets/icon-moon.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <img src={todo} alt="todo" />
      <img src={moon} alt="moon" />
    </header>
  );
};

import todo from "../assets/assets/todo.svg";
import moon from "../assets/assets/icon-moon.svg";
import "./Header.scss";
import sun from '../assets/assets/icon-sun.svg'
import { useContext, } from "react";
import { themeContext } from "./Themecontext";


export const Header = () => {
  const {darkMode} = useContext(themeContext);
  const {setDarkMode} = useContext(themeContext);

 
  function handleClick() {
    setDarkMode(!darkMode)
    console.log(localStorage)
    localStorage.getItem('darkMode')
  }

  

  

  return (
    <header>
      <img className="todo-img" src={todo} alt="todo" />
      {darkMode ? <img className="sun" src={sun} onClick={handleClick} /> :  <img  onClick={handleClick} className='moon' src={moon} alt="moon" /> }
    </header>
  );
};

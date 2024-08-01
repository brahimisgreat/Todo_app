import { useState } from "react";
import "./App.scss";
import { Create } from "./Components/Create";
import bgL from "../src/assets/assets/bg-mobile-light.jpg";
import { Header } from "./Components/Header";
import { List } from "./Components/List";
import bgdL from "./assets/assets/bg-desktop-light.jpg";
import { themeContext } from "./Components/Themecontext";
import  bgdD from './assets/assets/bg-desktop-dark.jpg'
import bgmD from './assets/assets/bg-mobile-dark.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app">
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="hero">
          <img src={darkMode? bgdD :  bgdL} className="bg-desktop" alt="background image" />
          <img src={darkMode? bgmD : bgL} className="bg-mobile" alt="background image" />
        </div>
        <div className="content">
          <Header />
          <Create />
          <List />
        </div>
      </themeContext.Provider>
    </div>
  );
}

export default App;

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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Active } from "./Components/Active";
import { Completed } from "./Components/Completed";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>

    <themeContext.Provider value={{ darkMode, setDarkMode }}>
    <div className={darkMode? 'dad' : 'mom'}>
      <div className="app">
        <div className="hero">
          <img src={darkMode? bgdD :  bgdL} className="bg-desktop" alt="background image" />
          <img src={darkMode? bgmD : bgL} className="bg-mobile" alt="background image" />
        </div>
        <div className="content">
          <Header />
          <Create />
          <div className="route-container">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/active" element={<Active />} />
            <Route path="/completed" element={<Completed />} />  
          </Routes>
          </div>
        </div>
      </div>
    </div>
      </themeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

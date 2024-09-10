
import React, { createContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from "react-router-dom";
import InfoUser from "./components/DashBoard/InfoUser/InfoUser";
import Certificate from "./components/DashBoard/Certificate/Certificate";
import Education from "./components/DashBoard/Education/Education";
import Experience from "./components/DashBoard/Experience/Experience";
import Project from "./components/DashBoard/Project/Project";
import Skill from "./components/DashBoard/Skill/Skill";
import Social from "./components/DashBoard/Social/Social";
import CreateInfo from "./components/DashBoard/CreateInfo/CreateInfo";
import Home from "./components/DashBoard/Home/Home";
import './App.css'
import LogIn from "./components/DashBoard/LogIn/LogIn";
import { URLContext } from "./context/URLContext";
export const ThemeContext = createContext('light')


function getInitialTheme() {
  
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}
function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  
  const URL = "https://yazanportfolio.rf.gd";

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  
  return (
    <>
    
      <ThemeContext.Provider value={[theme, setTheme]} >
        <URLContext.Provider value={URL}>
        <div className={`${theme} theme`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infouser" element={<InfoUser />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/social" element={<Social />} />
            <Route path="/createinfo" element={<CreateInfo />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </div>
        </URLContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App

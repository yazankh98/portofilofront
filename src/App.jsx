
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home/Home";
import './App.css'
import { ThemeContext } from "./context/ThemeContext";



function getInitialTheme() {
  
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}
function App() {
  const [theme, setTheme] = useState(getInitialTheme)


  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  
  return (
    <>
    
      <ThemeContext.Provider value={[theme, setTheme]} >
        
        <div className={`${theme} theme`}>
          <Home/>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App

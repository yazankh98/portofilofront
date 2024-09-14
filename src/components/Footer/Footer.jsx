import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../context/ThemeContext'
const Footer = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <footer>
            <hr />
            <p style={{ color: (theme === 'light') ? '' : 'white' }}> Powered by <b>Eng.Yazan Khairi Al-anam ✌</b>
            </p>
        </footer>
    )
}

export default Footer
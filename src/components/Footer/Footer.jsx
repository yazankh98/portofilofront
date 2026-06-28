import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {
    const [theme] = useContext(ThemeContext)
    const year = new Date().getFullYear()

    return (
        <footer className={`footer ${theme === 'dark' ? 'dark' : 'light'}`}>
            <p>
                © {year} Yazan Khairi Al-anam. Built with React, Next.js, and Laravel mindset.
            </p>
        </footer>
    )
}

export default Footer
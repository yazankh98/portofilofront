import React, { useState, useContext } from 'react'
import './NavBar.css'
import DownloadCv from './../DownloadCv/DownloadCv'
import { ThemeContext } from '../../context/ThemeContext'

const navLinks = [
    { label: 'Education', href: '#Education' },
    { label: 'Certificates', href: '#Certificate' },
    { label: 'Experience', href: '#Experiences' },
    { label: 'Skills', href: '#Skill' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Contact', href: '#Contact' },
]

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [theme, setTheme] = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className={`portfolioNav ${theme === 'dark' ? 'dark' : 'light'}`}>
            <nav className="navContainer">
                <a className="brand" href="#">
                    <span className="brandMark">YK</span>
                    <span>
                        <strong>Yazan Khairi</strong>
                        <small>Full-Stack Developer</small>
                    </span>
                </a>

                <div className="desktopLinks">
                    {navLinks.map((link) => (
                        <a key={link.href} className="navLink" href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="navActions">
                    <DownloadCv />

                    <button
                        className="themeButton"
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>

                    <button
                        className="menuButton"
                        type="button"
                        onClick={() => setShowMenu(true)}
                        aria-label="Open menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {showMenu && (
                <div className="mobileMenu">
                    <div className="mobileMenuHeader">
                        <div>
                            <strong>Yazan Khairi</strong>
                            <small>Full-Stack Developer</small>
                        </div>

                        <button
                            className="closeButton"
                            type="button"
                            onClick={() => setShowMenu(false)}
                            aria-label="Close menu"
                        >
                            X
                        </button>
                    </div>

                    <div className="mobileLinks">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="mobileLink"
                                href={link.href}
                                onClick={() => setShowMenu(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="mobileActions">
                        <DownloadCv />

                        <button
                            className="themeButton full"
                            type="button"
                            onClick={toggleTheme}
                        >
                            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default NavBar
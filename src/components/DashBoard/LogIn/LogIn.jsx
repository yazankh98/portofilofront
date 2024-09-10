import React, { useState, useEffect, useContext } from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URLContext } from '../../../context/URLContext'

const LogIn = () => {
    const url = useContext(URLContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`${url}/api/login`, { email, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                window.location.reload()
            });
    };
    const [Token, setToken] = useState('');
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <div>
            <form action="" method='post' onSubmit={handleSubmit}>
                <input className='infoInput' type="email" onChange={e => setEmail(e.target.value)} autoComplete="username" name="email" id="email" placeholder='email' />
                <input className='infoInput' type="password" onChange={e => setPassword(e.target.value)} autoComplete="current-password" name="password" id="password" placeholder='password' />
                <input className='btn btn-primary' type="submit" name="submitLogin" id="submitLogin" value="Log In" />
                <Link className="btn btn-secondary btnBack" to="/"> Back </Link>
            </form>
        </div>
    )
}

export default LogIn
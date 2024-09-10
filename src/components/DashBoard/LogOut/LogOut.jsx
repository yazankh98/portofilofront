import React, { useContext } from 'react'
import './LogOut.css'
import axios from 'axios'
import { URLContext } from '../../../context/URLContext'
const LogOut = () => {
    const url = useContext(URLContext)
    const token = localStorage.getItem('token');
    function LogOut() {
        axios.post(
            `${url}/api/logout`, {},

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((response) => {
            (console.log(response.data), window.location.reload()
            )
        }).catch(erroe => console.log(erroe))
    }
    return (
        < div >
            <button className="btn btn-danger btnBack" onClick={LogOut} type="button">LogOut</button>
        </ div>
    )
}

export default LogOut
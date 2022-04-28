import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepage.css';
import Searchbar from '../SearchBar/Searchbar';


const Homepage = () => {
    const navigate = useNavigate();
    const Signout = () => {
        localStorage.clear()
        navigate("/login")
    }
    
    return (
        <div>
            <div className="main_content">
                <div className="header">
                    <div className="title">BLINDSIDE</div>
                    <div className="signout" onClick={Signout}>Sign Out</div>
                </div>
                <Searchbar/>
            </div>
        </div>
    )
}

export default Homepage
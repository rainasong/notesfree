import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbarContainer">
                    <img src="./_assets/App-icon.png" id="icon"/>
                    <li className="navbarItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbarItem">
                        <Link to="/meeting">Start Meeting</Link>
                    </li>
                    <li className="navbarItem">
                        <Link to="/review">Review</Link>
                    </li>
                    <li className="navbarItem">
                        <Link to="/keyword">Keyword</Link>
                    </li>
                    <li className="navbarItem">
                        <Link to="/summary">Summary</Link>
                    </li>
                    <li className="navbarItem">
                        <Link to="/pieChart">Pie Chart</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;

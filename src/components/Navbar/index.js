import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ children }) => {
    return (
        <>
        <nav>
            <div className="logo"></div>
            <Link to="/user" className="nav-link">Profile</Link>
            <div className="nav-icon-container">
                <label>100</label>    
                <FontAwesomeIcon icon="coins" className="nav-icon"/>
            </div>
            <div className="nav-icon-container">
                <label>7</label>    
                <FontAwesomeIcon icon="shopping-cart" className="nav-icon"/>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
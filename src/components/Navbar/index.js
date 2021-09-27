import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchHistory, fetchUser } from '../../actions';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = ({ children }) => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchHistory())
    }, [])
    
    const points = useSelector(state => state.userReducer.user.points)
    const redeemProd = useSelector(state => state.userReducer.user.redeemHistory)

    return (
        <>
        <nav>
            <div className="logo"></div>
            <Link to="/user" className="nav-link">Profile</Link>
            <div className="nav-icon-container">
                <label>{points}</label>    
                <FontAwesomeIcon icon="coins" className="nav-icon"/>
            </div>
            <div className="nav-icon-container">
                {/* <label>{redeemProd.length}</label>     */}
                <FontAwesomeIcon icon="shopping-cart" className="nav-icon"/>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
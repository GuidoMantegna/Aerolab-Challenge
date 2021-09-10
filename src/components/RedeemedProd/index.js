import React from 'react';
import './styles.scss';
import prodImg from '../../assets/img/zapatillas.jpg';

const RedeemedProd = () => {
    return (
        <li className="redeemed-prod">
            <img src={prodImg} alt="product"></img>
            <h5 className="prod-title">Nike N95 Air</h5>
            <h5 className="prod-cost">200</h5>
        </li>
    );
};

export default RedeemedProd;
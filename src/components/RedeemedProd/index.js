import React from 'react';
import './styles.scss';

const RedeemedProd = ({ img, name, cost, id }) => {
    return (
        <>
        <li className="redeemed-prod" key={id}>
            <img src={img} alt="product"></img>
            <h5 className="prod-title">{name}</h5>
            <h5 className="prod-cost">{cost}</h5>
        </li>
        </>
    );
};

export default RedeemedProd;
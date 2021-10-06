import React from 'react';
import './styles.scss';

const RedeemedProd = ({ img, name, cost, id }) => {
    return (
        <>
        <li className="redeemed-prod" key={id}>
            <img src={img} alt="product"></img>
            <h4 className="prod-title">{name}</h4>
            <h4 className="prod-cost">{cost}</h4>
        </li>
        </>
    );
};

export default RedeemedProd;
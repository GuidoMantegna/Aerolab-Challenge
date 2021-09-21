import React from 'react';
import './styles.scss';
import prodImg from '../../assets/img/zapatillas.jpg';

const RedeemedProd = ({ img, name, cost }) => {
    return (
        <>
            <img src={img} alt="product"></img>
            <h5 className="prod-title">{name}</h5>
            <h5 className="prod-cost">{cost}</h5>
        </>
    );
};

export default RedeemedProd;
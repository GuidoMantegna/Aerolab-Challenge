import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({ children }) => {
    return (
        <>
        <header></header>
        {children}
        </>
    );
};

export default ProductCard;
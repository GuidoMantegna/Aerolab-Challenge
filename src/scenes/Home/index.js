import React from 'react';
import ProductCard from '../../components/ProductCard';
import './styles.scss';

const Home = () => {
    return (
        <>
        <div className="sorting-panel">
            <p>Sort by:</p>
            <button className="btn-active">lowest</button>
            <button className="btn-disable">highest</button>
        </div>
        <ul className="product-list">
            <li><ProductCard credit/></li>
            <li><ProductCard/></li>
            <li><ProductCard credit/></li>
            <li><ProductCard/></li>
            <li><ProductCard/></li>
            <li><ProductCard/></li>
        </ul>
        <div className="select-page-panel">
            <p>Showing 16 of 32</p>
            <button className="btn-prev"> {"<"} prev </button>
            <button className="btn-next"> next {">"} </button> 
        </div>
        </>
    );
};

export default Home;
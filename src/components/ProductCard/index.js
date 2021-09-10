import React from 'react';
import './styles.scss';
import prodImg from '../../assets/img/zapatillas.jpg';

const ProductCard = ({credit}) => {
    return (
        <>
        <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="prod-category">indumentaria</p>    
                    <img src={prodImg} alt="product"></img>
                    <h3 className="prod-title">Nike N95 Air</h3>
                    <h3 className="prod-cost">200</h3>
                </div>
                <div className="flip-card-back">
                    <img src={prodImg} alt="product"></img>
                    {
                        credit
                        ? <button className="buy-btn">COMPRAR</button>
                        : <> 
                        <p>You need <strong>156</strong> more points to get it</p>
                        
                        <button className="points-btn">+ 1.000</button>
                        <button className="points-btn">+ 5.000</button>
                        <button className="points-btn">+ 7.500</button> 
                        </>
                    }
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductCard;
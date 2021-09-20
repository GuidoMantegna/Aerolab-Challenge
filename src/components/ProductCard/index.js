import React from 'react';
import './styles.scss';
import prodImg from '../../assets/img/zapatillas.jpg';

const ProductCard = ({credit, category, title, cost, img}) => {
    return (
        <>
        <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="prod-category">{category}</p>    
                    <img src={img} alt="product"></img>
                    <h3 className="prod-title">{title}</h3>
                    <h3 className="prod-cost">{cost}</h3>
                </div>
                <div className="flip-card-back">
                    <img src={img} alt="product"></img>
                    {
                        credit
                        ? <button className="buy-btn">BUY</button>
                        : <> 
                        <p>You need <strong>156</strong> more points to get it</p>
                        
                        <button className="points-btn">GET POINTS</button>
                        </>
                    }
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductCard;
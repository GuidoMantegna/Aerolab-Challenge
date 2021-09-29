import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { fetchItem } from '../../actions';
import axios from 'axios';


const ProductCard = ({category, title, cost, img, id}) => {

    const points = useSelector(state => state.userReducer.user.points);
    const status = useSelector(state => state.statusReducer.status);
    const dispatch = useDispatch()

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
                        cost < points
                        ? 
                        <>
                        {status === "PENDING" && <p>LOADING 🕘</p>}
                        {(status === "RESOLVED" || status === "IDLE") &&
                        <button className="points-btn btn-5000" onClick={() => dispatch(fetchItem(id))}>BUY</button>
                        }
                        </>
                        : <> 
                            <p>You need <strong>{cost - points}</strong> more points to get it</p>
                            <Link to="/user" className="points-btn btn-7500">GET POINTS</Link>
                          </>
                    }
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductCard;
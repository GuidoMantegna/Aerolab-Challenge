import React, { useEffect } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory, fetchPoints, getPoints } from '../../actions';
import RedeemedProd from '../../components/RedeemedProd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const UserPanel = () => {
    const dispatch = useDispatch();
    const points = useSelector(state => state.userReducer.user.points);
    const redeemHistory = useSelector(state => state.userReducer.user.redeemHistory);

    useEffect(() => {
        dispatch(fetchHistory())
    })

    return (
        <div className="redeemed-products">
            <h3>My Points <FontAwesomeIcon icon="coins"/></h3>
            {/* <div className=""> */}
                <p>current credit: <strong>{points}</strong></p>
                <button className="points-btn btn-1000" onClick={() => dispatch(fetchPoints(1000))}>+1.000</button>
                <button className="points-btn btn-5000" onClick={() => dispatch(fetchPoints(5000))}>+5.000</button>
                <button className="points-btn btn-7500" onClick={() => dispatch(fetchPoints(7500))}>+7.500</button>
            {/* </div> */}
            <h3>My Products <FontAwesomeIcon icon="shopping-cart"/></h3>
            <ul>
                {
                    redeemHistory.map(item => {

                        return (
                            
                                <RedeemedProd img={item.img.url} name={item.name} cost={item.cost} id={item.id} />
                            
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default UserPanel;
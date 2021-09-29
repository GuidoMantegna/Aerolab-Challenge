import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory, fetchPoints, getPoints } from '../../actions';
import RedeemedProd from '../../components/RedeemedProd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserPanel = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const points = useSelector(state => state.userReducer.user.points);
    const redeemHistory = useSelector(state => state.productsReducer.redeemedProducts);

    useEffect(() => {
        dispatch(fetchHistory())
    }, [])

    return (
        <div className="redeemed-products">
            <div className="breadcrumb">
                <button onClick={() => history.push("/")}>home</button>
                <span>/ profile</span>
            </div>

            <h3>My Points <FontAwesomeIcon icon="coins"/></h3>
            <p>current credit: <strong>{points}</strong></p>
            <button className="points-btn btn-1000" onClick={() => dispatch(fetchPoints(1000))}>+1.000</button>
            <button className="points-btn btn-5000" onClick={() => dispatch(fetchPoints(5000))}>+5.000</button>
            <button className="points-btn btn-7500" onClick={() => dispatch(fetchPoints(7500))}>+7.500</button>

            <h3>My Products <FontAwesomeIcon icon="shopping-cart"/></h3>
            <ul>
                {redeemHistory.map(item => {
                    return (
                        <RedeemedProd img={item.img.url} name={item.name} cost={item.cost} id={item._id} />
                    )
                })}
            </ul>
        </div>
    );
};

export default UserPanel;
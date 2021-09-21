import React, { useEffect } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { fetchPoints, getPoints } from '../../actions';
import RedeemedProd from '../../components/RedeemedProd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const UserPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="redeemed-products">
            <h3>My Points <FontAwesomeIcon icon="coins"/></h3>
            {/* <div className=""> */}
                <p>current credit: <strong>100</strong></p>
                <button className="points-btn btn-1000" onClick={() => dispatch(fetchPoints(1000))}>+1.000</button>
                <button className="points-btn btn-5000" onClick={() => dispatch(fetchPoints(5000))}>+5.000</button>
                <button className="points-btn btn-7500" onClick={() => dispatch(fetchPoints(7500))}>+7.500</button>
            {/* </div> */}
            <h3>My Products <FontAwesomeIcon icon="shopping-cart"/></h3>
            <ul>
                <RedeemedProd />
                <RedeemedProd />
                <RedeemedProd />
                <RedeemedProd />
                <RedeemedProd />
                <RedeemedProd />
            </ul>
        </div>
    );
};

export default UserPanel;
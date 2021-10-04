import React, { useEffect, useRef } from 'react';
import './styles.scss';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory, fetchPoints } from '../../actions';
import RedeemedProd from '../../components/RedeemedProd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loader from '../../assets/img/loader.gif'  

const UserPanel = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const points = useSelector(state => state.userReducer.user.points);
    const redeemHistory = useSelector(state => state.productsReducer.redeemedProducts);
    const status = useSelector(state => state.statusReducer.status);

    useEffect(() => {
        dispatch(fetchHistory())
    }, [dispatch])

    const msg = useRef(null);
    const showMsg = () => {
        msg.current.style.opacity = "1"

        setTimeout(() => {
            msg.current.style.opacity = "0"
        }, 4000)
    }

    return (
        <div className="redeemed-products">
            <div className="breadcrumb">
                <button onClick={() => history.push("/")}>home</button>
                <span>/ profile</span>
            </div>

            <div className="points-title">
                <h3>My Points <FontAwesomeIcon icon="coins"/></h3>
                {(status === "RESOLVED" || status === "REJECTED") && showMsg()}
                <p className="success-points" ref={msg}>Points updated</p>
            </div>
            <p>current credit: <strong>{points}</strong></p>
            {status === "PENDING" ?
            <div>
                <button className="points-btn btn-1000 btn-disabled">Loading...</button>
                <button className="points-btn btn-5000 btn-disabled">Loading...</button>
                <button className="points-btn btn-7500 btn-disabled">Loading...</button>
            </div> :
            <div>
                <button className="points-btn btn-1000" onClick={() => dispatch(fetchPoints(1000))}>+1.000</button>
                <button className="points-btn btn-5000" onClick={() => dispatch(fetchPoints(5000))}>+5.000</button>
                <button className="points-btn btn-7500" onClick={() => dispatch(fetchPoints(7500))}>+7.500</button>
            </div>
            }
            <h3>My Products <FontAwesomeIcon icon="shopping-cart"/></h3>
            <ul>
            {redeemHistory.length === 0 ? <p>LOADING 🕘</p> :
                redeemHistory.map(item => {
                    return (
                        <RedeemedProd img={item.img.url} name={item.name} cost={item.cost} id={item._id} />
                    )
                })
            }
            </ul>
        </div>
    );
};

export default UserPanel;
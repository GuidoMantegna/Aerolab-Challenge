import React, { useEffect } from "react";
import "./styles.scss";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory, fetchPoints } from "../../actions";
import RedeemedProd from "../../components/RedeemedProd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonLoading from "../../components/ButtonLoading";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";

const UserPanel = () => {
  const dispatch = useDispatch(),
    history = useHistory(),
    points = useSelector((state) => state.userReducer.user.points),
    redeemHistory = useSelector(
      (state) => state.productsReducer.redeemedProducts
    ),
    status = useSelector((state) => state.statusReducer.status),
    postStatus = useSelector((state) => state.statusReducer.postStatus.status),
    statusError = useSelector((state) => state.statusReducer.error);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <div className="redeemed-products">
      <div className="breadcrumb">
        <button onClick={() => history.push("/")}>home</button>
        <span>/ profile</span>
      </div>

      <div className="points-title">
        <h3>
          My Points <FontAwesomeIcon icon="coins" />
        </h3>
      </div>
      <p>
        current credit: <strong>{points}</strong>
      </p>
      {postStatus === "POST_PENDING" ? (
        <div>
          <ButtonLoading />
          <ButtonLoading />
          <ButtonLoading />
        </div>
      ) : (
        <div>
          <button
            className="points-btn btn-1000"
            onClick={() => dispatch(fetchPoints(1000))}
          >
            +1.000
          </button>
          <button
            className="points-btn btn-5000"
            onClick={() => dispatch(fetchPoints(5000))}
          >
            +5.000
          </button>
          <button
            className="points-btn btn-7500"
            onClick={() => dispatch(fetchPoints(7500))}
          >
            +7.500
          </button>
        </div>
      )}
      <h3>
        My Products <FontAwesomeIcon icon="shopping-cart" />
      </h3>
      <ul>
        {status === "PENDING" && <PageLoading />}
        {(status === "IDLE" || status === "RESOLVED") &&
          redeemHistory.map((item) => {
            return (
              <li className="redeemed-prod" key={item.createDate}>
                <RedeemedProd
                  img={item.img.url}
                  name={item.name}
                  cost={item.cost}
                />
              </li>
            );
          })}
      </ul>
      {status === "REJECTED" && <PageError msg={statusError.message} />}
    </div>
  );
};

export default UserPanel;

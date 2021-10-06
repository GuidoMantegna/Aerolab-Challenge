import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../../actions";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector((state) => state.userReducer.user);
  const {points, name, redeemHistory} = user;
  const postStatus = useSelector((state) => state.statusReducer.postStatus);

  return (
    <>
      <nav>
        <div className="logo"></div>
        {postStatus.status === "POST_RESOLVED" && (
          <p className="post-msg">{postStatus.msg}</p>
        )}
        <Link to="/user" className="nav-link">
          {name}
        </Link>
        <div className="nav-icon-container">
          <label>{points}</label>
          <FontAwesomeIcon icon="coins" className="nav-icon" />
        </div>
        <div className="nav-icon-container">
          <label>{redeemHistory && redeemHistory.length}</label>
          <FontAwesomeIcon icon="shopping-cart" className="nav-icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

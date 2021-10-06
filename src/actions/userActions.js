import axios from "axios";
import {
  postPending,
  postResolved,
  postRejected,
  headers,
  fetchHistory,
  postIdle,
} from ".";

// MIDDLEWARES
export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get("https://coding-challenge-api.aerolab.co/user/me", {
        headers: headers(),
      })
      .then((res) => {
        const user = res.data;
        dispatch(getUser(user));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const fetchPoints = (num) => {
  return (dispatch) => {
    dispatch(postPending());

    axios
      .post(
        "https://coding-challenge-api.aerolab.co/user/points",
        { amount: num },
        {
          headers: headers(),
        }
      )
      .then((res) => {
        const points = res.data["New Points"];
        const msg = res.data.message;
        dispatch(getPoints(points));
        dispatch(fetchHistory());
        dispatch(fetchUser());
        dispatch(postResolved(msg));
        setTimeout(() => dispatch(postIdle()), 3000);
      })
      .catch((error) => {
        dispatch(postRejected(error));
      });
  };
};

// ACTIONS
export const getUser = (user) => {
  return {
    type: "GET_USER",
    payload: user,
  };
};

export const getPoints = (points) => {
  return {
    type: "GET_POINTS",
    payload: points,
  };
};

import axios from 'axios';
import { statusPending, statusResolved, statusRejected, headers } from '.';

// MIDDLEWARES
export const fetchUser = () => {
    return (dispatch) => {
      dispatch(statusPending)

      axios.get('https://coding-challenge-api.aerolab.co/user/me', {
                headers: headers()
            })
            .then(res => {
                const user = res.data
                dispatch(getUser(user))
                dispatch(statusResolved)
            })
            .catch(error => {
                dispatch(statusRejected(error));
            });
    }
}

export const fetchPoints = (num) => {
    return (dispatch) => {
      dispatch(statusPending)

      axios.post('https://coding-challenge-api.aerolab.co/user/points', { amount: num }, {
            headers: headers(),
          })
            .then(res => {
                dispatch(getPoints(num))
                dispatch(statusResolved)
            })
            .catch(error => {
                dispatch(statusRejected(error));
            });
    }
}

// ACTIONS
export const getUser = (user) => {
    return {
        type: 'GET_USER',
        payload: user
    }
}

export const getPoints = (points) => {
    return {
      type: 'GET_POINTS',
      payload: points
    }
}
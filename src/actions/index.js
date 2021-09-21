import axios from 'axios';

export const fetchProducts = () => {
    return (dispatch, getState) => {
      dispatch(statusPending)
      axios.get('https://coding-challenge-api.aerolab.co/products', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQwYWY4NjcwYjY0YTAwMjE4YTQ1OWEiLCJpYXQiOjE2MzE2MjkxOTB9.bVdWQdLhGQhQaSaU4mSueNr1ZIIV8j3YHe3AZ-wcXmQ'
                }
            })
            .then(response => {
                const products = response.data
                dispatch(getProducts(products))
                dispatch(statusResolved)
            })
            .catch(error => {
                dispatch(statusRejected(error));
            });
    }
  }

export const fetchUser = () => {
  return (dispatch, getState) => {
    dispatch(statusPending)
    axios.get('https://coding-challenge-api.aerolab.co/user/me', {
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQwYWY4NjcwYjY0YTAwMjE4YTQ1OWEiLCJpYXQiOjE2MzE2MjkxOTB9.bVdWQdLhGQhQaSaU4mSueNr1ZIIV8j3YHe3AZ-wcXmQ'
              }
          })
          .then(response => {
              const user = response.data
              dispatch(getUser(user))
              dispatch(statusResolved)
          })
          .catch(error => {
              dispatch(statusRejected(error));
          });
  }
}

export const fetchPoints = (num = 1000) => {
  return (dispatch, getState) => {
    dispatch(statusPending)
    axios.post('https://coding-challenge-api.aerolab.co/user/points', { amount: num }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQwYWY4NjcwYjY0YTAwMjE4YTQ1OWEiLCJpYXQiOjE2MzE2MjkxOTB9.bVdWQdLhGQhQaSaU4mSueNr1ZIIV8j3YHe3AZ-wcXmQ',
          },
        })
          .then(response => {
              dispatch(getPoints(num))
              dispatch(statusResolved)
          })
          .catch(error => {
              dispatch(statusRejected(error));
          });
  }
}

export const getProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    payload: products
  }
}

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

export const statusPending = () => {
  return {
    type: "PENDING"
  }
}

export const statusResolved = () => {
  return {
    type: "RESOLVED"
  }
}

export const statusRejected = error => {
  return {
    type: "REJECTED",
    payload: error
  }
}
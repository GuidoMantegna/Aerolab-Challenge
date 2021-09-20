import axios from 'axios';

export const fetchProducts = () => {
    return (dispatch, getState) => {
      dispatch(statusPending())
      axios.get('https://coding-challenge-api.aerolab.co/products', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQwYWY4NjcwYjY0YTAwMjE4YTQ1OWEiLCJpYXQiOjE2MzE2MjkxOTB9.bVdWQdLhGQhQaSaU4mSueNr1ZIIV8j3YHe3AZ-wcXmQ'
                }
            })
            .then(function (response) {
                const products = response.data
                dispatch(getProducts(products))
                dispatch(statusResolved())
            })
            .catch(function (error) {
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
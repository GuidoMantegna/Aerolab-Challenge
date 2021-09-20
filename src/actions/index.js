import axios from 'axios';

export const fetchProducts = () => {
  // Now instead of return an object, we can return a function
    return (dispatch, getState) => { //it takes to parameters: the dispatch method, and getState
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
            })
            .catch(function (error) {
                console.log(error);
            });
    }
  }

  export const getProducts = (products) => {
    return {
      type: 'GET_PRODUCTS',
      payload: products
    }
  }

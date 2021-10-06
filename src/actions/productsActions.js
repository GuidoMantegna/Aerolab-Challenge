import axios from 'axios';
import { 
    statusPending, 
    statusResolved, 
    statusRejected, 
    postPending, 
    postRejected, 
    postResolved, 
    postIdle,
    headers, 
    fetchUser } from '.';

// ACTIONS
export const getProducts = (products, qty) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products, 
        qty
    }
  }
  
export const getRedeemProducts = (products) => {
    return {
        type: 'GET_REDEEMED_PRODUCTS',
        payload: products
    }
}

// export const redeemProduct = (item) => {
//     return {
//         type: 'REDEEM_PRODUCT',
//         payload: item
//     }
// }

export const sortProducts = (sortBy) => {
    return {
        type: 'SORT_PRODUCTS',
        payload: sortBy
    }
}

// MIDDLEWARES
export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(statusPending())

      axios.get('https://coding-challenge-api.aerolab.co/products', {
            headers: headers(),
        })
        .then(response => {
            const products = response.data
            dispatch(getProducts(products))
            dispatch(statusResolved())
        })
        .catch(error => {
            dispatch(statusRejected(error));
        })
    }
}

export const fetchHistory = () => {
    return (dispatch) => {
      dispatch(statusPending())
      
      axios.get('https://coding-challenge-api.aerolab.co/user/history', {
                headers: headers()
            })
            .then(res => {
                const products = res.data
                dispatch(getRedeemProducts(products))
                dispatch(statusResolved())
            })
            .catch(error => {
                dispatch(statusRejected(error));
            });
    }
}

export const fetchItem = (id) => {
    return (dispatch) => {
      dispatch(postPending())

      axios.post('https://coding-challenge-api.aerolab.co/redeem', { productId: id }, {
            headers: headers(),
          })
            .then(res => {
                const msg = res.data
                // dispatch(fetchHistory())
                dispatch(fetchUser())
                dispatch(postResolved(msg))
                setTimeout(() => dispatch(postIdle()), 3000)
            })
            .catch(error => {
                dispatch(postRejected(error));  
            });
    }
}


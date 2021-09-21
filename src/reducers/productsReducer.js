const initState = {
    // status: 'idle',
    products: [], 
    redeemedProducts: [],
    // user: {},
    // error: null
};

const productsReducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_PRODUCTS":     
            return {
                ...state,
                products: action.payload
            }
        case "GET_REDEEMED_PRODUCTS":     
            return {
                ...state,
                redeemedProducts: action.payload
            }
        default: 
            return state
    }
}

export default productsReducer;
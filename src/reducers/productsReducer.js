const initState = {
    // status: 'idle',
    products: [], 
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
        default: 
            return state
    }
}

export default productsReducer;
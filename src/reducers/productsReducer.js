import { sortProducts } from "../actions";

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
        case "REDEEM_PRODUCT":
            return {
                ...state,
                redeemedProducts: [...state.redeemedProducts, state.redeemedProducts.push(action.payload)]
            }
        case "SORT_PRODUCTS":

            if(action.payload === "lowest") {
                return {
                    ...state,
                    products: state.products.slice().sort((a, b) => a.cost - b.cost)
                }
            }
            return {
                ...state,
                products: state.products.slice().sort((a, b) => b.cost - a.cost)
            }
            
        default:
            return state
    }
}

export default productsReducer;
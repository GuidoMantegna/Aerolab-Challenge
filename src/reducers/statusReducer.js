const initState = {
    status: 'IDLE',
    // products: [], 
    // user: {},
    error: null
};

const statusReducer = (state = initState, action) => {
    switch(action.type) {
        case "PENDING":     
            return {
                ...state,
                status: action.type
            }
        case "RESOLVED":     
            return {
                ...state,
                status: action.type
            }
        case "REJECTED":     
            return {
                ...state,
                status: action.type,
                error: action.payload,
            }
        default: 
            return state
    }
}

export default statusReducer;
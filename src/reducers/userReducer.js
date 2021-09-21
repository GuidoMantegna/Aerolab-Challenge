const initState = {
    // status: 'idle',
    // products: [], 
    user: {},
    // error: null
};

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_USER":     
            return {
                ...state,
                user: action.payload,
            }
        case "GET_POINTS":     
        
            return {
                ...state,
                user: {...state.user, points: state.user.points += action.payload},
            }
        default: 
            return state
    }
}

export default userReducer;
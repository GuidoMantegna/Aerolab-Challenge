const initState = {
    status: 'IDLE',
    error: null,
    postStatus: {
        status: 'POST_IDLE',
        error: null,
        msg: ''
    }
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
        case "POST_PENDING":     
            return {
                ...state,
                postStatus: {error: null, status: action.type, msg: ''}
            }
        case "POST_RESOLVED":     
            return {
                ...state,
                postStatus: {error: null, status: action.type, msg: action.payload}
            }
        case "POST_REJECTED":     
            return {
                ...state,
                postStatus: {status: action.type, error: action.payload, msg: ''}
            }
        case "POST_IDLE":     
            return {
                ...state,
                postStatus: {error: null, status: action.type, msg: ''}
            }
        default: 
            return state
    }
}

export default statusReducer;
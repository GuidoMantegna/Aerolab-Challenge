const initState = {
    status: 'IDLE',
    error: null,
    itemStatus: {
        status: 'ITEM_IDLE',
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
        case "ITEM_PENDING":     
            return {
                ...state,
                itemStatus: {error: null, status: action.type, msg: ''}
            }
        case "ITEM_RESOLVED":     
            return {
                ...state,
                itemStatus: {error: null, status: action.type, msg: action.payload}
            }
        case "ITEM_REJECTED":     
            return {
                ...state,
                itemStatus: {
                    status: action.type,
                    error: action.payload,
                    msg: ''
                }
            }
        default: 
            return state
    }
}

export default statusReducer;
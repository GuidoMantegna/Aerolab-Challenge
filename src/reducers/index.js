import productsReducer from "./productsReducer";
import statusReducer from "./statusReducer";
import userReducer from "./userReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    productsReducer,
    statusReducer,
    userReducer
})

export default rootReducer;
import productsReducer from "./productsReducer";
import statusReducer from "./statusReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    productsReducer,
    statusReducer
})

export default rootReducer;
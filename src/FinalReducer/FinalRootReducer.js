import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import cartReducer from "./cartReducer"

const FinalRootReducer = combineReducers({
    cart:cartReducer,
    ourStore:storeReducer
})

export default FinalRootReducer
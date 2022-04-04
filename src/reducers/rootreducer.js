import { combineReducers } from "redux";
import gamereducer from "./gamereducer";
import itemreducer from "./itemreducer";


const rootreducer = combineReducers({
    itemStore:itemreducer,
    gameStore:gamereducer
})

export default rootreducer
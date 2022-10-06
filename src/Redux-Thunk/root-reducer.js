
import { combineReducers } from "redux";
import postReducer from "./reducer";

// use this data in dispatch time

const rootReducers = combineReducers({data:postReducer});


export default rootReducers;
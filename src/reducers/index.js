import {combineReducers} from "redux";
import {countReducer} from "./countReducer";
import {greetReducer} from "./greetReducer";

export default combineReducers({count: countReducer, greet: greetReducer})
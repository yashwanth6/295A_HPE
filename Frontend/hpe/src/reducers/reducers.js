import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import auth from "./auth";

const reducers = combineReducers({ messageReducer, auth });

export default reducers;
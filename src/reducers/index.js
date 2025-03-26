
import { combineReducers } from "redux";
import userAuthProvider from "./userAuthReducer";

const myreducer = combineReducers({
    user : userAuthProvider
})

export default myreducer;
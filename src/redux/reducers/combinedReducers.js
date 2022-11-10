import { combineReducers } from "redux";
import TogglerReducer from "./support/supportToggler";
import AuthReducer from './authReducers/authReducer.js'
import ChatReducer from "./chat/chat";
// import ChatRe



const reducers = 
{ 
    TogglerReducer,
    AuthReducer,
    ChatReducer
}

const allReducers = combineReducers(reducers);

export default allReducers;
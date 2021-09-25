import { combineReducers } from "redux";
import postReducers from './postsReducers';
import UserHeader from "../components/UserHeader";
import userReducer from "./userReducer";

export default combineReducers({
    posts:postReducers,
    user:userReducer
})
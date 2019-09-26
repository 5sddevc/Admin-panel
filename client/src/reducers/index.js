import { combineReducers } from 'redux'
import testReducer from './Test';
import appReducer from './App';
import userReducer from "./Users";
import modalReducer from './Modal';


export default combineReducers({
    Test: testReducer,
    App : appReducer,
    Users: userReducer,
    Modal: modalReducer
});
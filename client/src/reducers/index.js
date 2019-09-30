import { combineReducers } from 'redux'
import testReducer from './Test';
import appReducer from './App';
import dashboardReducer from "./Dashboard"
import userReducer from "./Users";
import modalReducer from './Modal';


export default combineReducers({
    Test: testReducer,
    App : appReducer,
    Dashboard: dashboardReducer,
    Users: userReducer,
    Modal: modalReducer
});
import { combineReducers } from 'redux'
import testReducer from './Test';
import appReducer from './App';
import modalReducer from './Modal';


export default combineReducers({
    Test: testReducer,
    App : appReducer,
    Modal: modalReducer
});
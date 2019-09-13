import { combineReducers } from 'redux'
import testReducer from './test';
import modalReducer from './modal';


export default combineReducers({
    Test: testReducer,
    Modal: modalReducer
});
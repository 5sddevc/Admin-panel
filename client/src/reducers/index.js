import { combineReducers } from 'redux'
import testReducer from './Test';
import modalReducer from './Modal';


export default combineReducers({
    Test: testReducer,
    Modal: modalReducer
});
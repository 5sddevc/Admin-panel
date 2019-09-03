import { combineReducers } from 'redux'
import testReducer from './testReducer';
import modalReducer from './modalReducer';


export default combineReducers({
    Test: testReducer,
    Modal: modalReducer
});
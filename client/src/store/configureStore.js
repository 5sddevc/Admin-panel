import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from '../reducers/rootReducer'

// export default function configureStore(preloadedState) {

console.log("TESTTEST", createSagaMiddleWare)

const sagaMiddleware = createSagaMiddleware();

//const middlewares = [loggerMiddleware, thunkMiddleware]
//const middlewareEnhancer = applyMiddleware(...middlewares)

//const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//const composedEnhancers = compose(...enhancers)

export const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware));
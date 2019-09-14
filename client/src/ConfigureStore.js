import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

// export default function configureStore(preloadedState) {

const sagaMiddleware = createSagaMiddleWare();

//const middlewares = [loggerMiddleware, thunkMiddleware]
//const middlewareEnhancer = applyMiddleware(...middlewares)

//const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//const composedEnhancers = compose(...enhancers)

export const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

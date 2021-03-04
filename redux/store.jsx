import { createStore, applyMiddleware, compose } from 'redux'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)))
export default store
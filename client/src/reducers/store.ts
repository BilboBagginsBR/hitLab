import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import alert from './alert';
import auth from './auth'
import profile from './profile'
import post from './post'


const rootReducer = combineReducers({
    alert,
    auth,
    profile,
    post
})


const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;
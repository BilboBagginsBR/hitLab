import {combineReducers} from 'redux'
import alert from './alert'
import auth from './auth'

const rootReducer = combineReducers({
    alert,
    auth
})


export type RootState = ReturnType<typeof rootReducer> 

export default rootReducer
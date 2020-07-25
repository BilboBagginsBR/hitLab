
import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, ACCOUNT_DELETED } from '../actions/actionTypes'
import { authRegStateType, authRegAction } from '../actions/types'

const initialState: authRegStateType = {
    isAuthenticated: false,
    loading: true,
    user: null
}

export default function (state = initialState, action: authRegAction) {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_SUCCESS:
            document.cookie = `x-auth-token=${action.payload.token}`
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_SUCCESS:
            document.cookie = `x-auth-token=${action.payload.token}`
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            };
        case ACCOUNT_DELETED:
            document.cookie = 'x-auth-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        case AUTH_ERROR:
        case LOGOUT:
            document.cookie = 'x-auth-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}


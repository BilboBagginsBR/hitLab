import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL, registerActionType, loginActionType, USER_LOADED, AUTH_ERROR } from './types'
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken'
import axios from 'axios';



export const loadUserAction = () => async (dispatch: any) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const registerAction = ({ name, email, password }: registerActionType) => async (dispatch: any) => {

    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            let error: any = new Error();
            error = { ...error, serverError: data }
            throw error
        }
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
        
        dispatch(loadUserAction())
    } catch (error) {
        const errors = error.serverError.errors

        if (errors) {
            errors.forEach((err: any) => dispatch(setAlert(err.msg, 'error')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }

}

export const loginAction = ({ email, password }: loginActionType) => async (dispatch: any) => {

    try {
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            let error: any = new Error();
            error = { ...error, serverError: data }
            throw error
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        dispatch(loadUserAction())
    } catch (error) {
        const errors = error.serverError.errors

        if (errors) {
            errors.forEach((err: any) => dispatch(setAlert(err.msg, 'error')))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }

}

export const logoutActioin = () => (dispatch: any) => {
    dispatch({type: LOGOUT})
}
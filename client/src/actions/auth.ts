import { registerDataType } from './types'
import { Dispatch } from 'redux'
import { USER_LOADED, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_PROFILE, LOGOUT } from './actionTypes'
import { setAlert } from './alert'

export const loadUser = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch('/api/auth')
        const data = await res.json();
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: USER_LOADED,
            payload: data
        })

    } catch (error) {
        const errors = error.errors.errors;
        if (errors) errors.forEach((error: any) => dispatch(setAlert(error.msg, 'red')))
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const register = ({ name, email, password }: registerDataType) => async (dispatch: Dispatch<any>) => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

        const data: { token: string } = await response.json();
        if (!response.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

        dispatch(loadUser())

    } catch (error) {
        const errors = error.errors.errors;
        if (errors) errors.forEach((error: any) => dispatch(setAlert(error.msg, 'red')))
        dispatch({
            type: REGISTER_FAIL
        })
    }
}


// Login User
export const login = (email: string, password: string) => async (dispatch: Dispatch<any>) => {


    try {
        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (!res.ok) {
            let error: any = new Error();
            const { errors } = data
            error = { ...error, errors }
            throw error
        }

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.errors

        if (errors) {
            errors.forEach((error: any) => dispatch(setAlert(error.msg, 'red')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};


export const logout = () => (dispatch: Dispatch) => {
    dispatch({ type: LOGOUT })
}
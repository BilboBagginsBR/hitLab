export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const USER_LOADED = 'USER_LOADED'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

export type alertState = Readonly<{
    id: number,
    msg: string,
    alertType: "success" | "info" | "warning" | "error" | undefined
}>

export type registerActionType = Readonly<{
    name: string,
    email: string,
    password: string
}>
export type loginActionType = Readonly<{
    email: string,
    password: string
}>

export type alertAction = {
    type: typeof SET_ALERT | typeof REMOVE_ALERT,
    payload: alertState | number

}

type userInfo = {
    _id: string,
    name: string,
    email: string,
    avatar: string,
    date: string
} 

type userToken = {
    token: string
}

export type authAction = {
    type: typeof REGISTER_SUCCESS | typeof REGISTER_FAIL | typeof USER_LOADED | typeof AUTH_ERROR | typeof LOGIN_SUCCESS | typeof LOGIN_FAIL | typeof LOGOUT,
    payload: userToken
}

export type rootState = {
    alert: alertState[],
    auth: {
        token: string,
        isAuthenticated: boolean,
        loading: boolean,
        user: userInfo
    }
}


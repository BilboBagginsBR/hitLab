import { v4 as uuid } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

type alertType = "success" | "info" | "warning" | "error" | undefined

export const setAlert = (msg: string, alertType: alertType) => (dispatch: any) => {
    const id = uuid();
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id }
        })


    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000)
}
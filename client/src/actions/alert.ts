import { v4 as uuid } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './actionTypes'
import { alertAction } from './types'
import { alertStatus } from './types'
import { Dispatch } from 'redux'

export const setAlert = (msg: string, alertType: alertStatus) => (dispatch: Dispatch<alertAction>) => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    })

    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), 3000)
}
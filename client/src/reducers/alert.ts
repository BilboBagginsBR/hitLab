import { SET_ALERT, REMOVE_ALERT } from '../actions/actionTypes'
import { alertState, alertAction } from '../actions/types'

const initialState: alertState[] = [];

export default function (state = initialState, action: alertAction) {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload]
        case REMOVE_ALERT:
            return state.filter((alert: alertState) => alert.id !== action.payload)
        default:
            return state;
    }
}
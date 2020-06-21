export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

export type alertState = Readonly<{
    id: number,
    msg: string,
    alertType: string
}>

export type alertAction = {
    type: typeof SET_ALERT | typeof REMOVE_ALERT,
    payload: alertState | number

}
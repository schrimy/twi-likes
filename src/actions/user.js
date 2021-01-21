import { RECEIVE_TWIT_USER, CLEAR_USER } from '../utils/constants'

export const receiveUser = (userInfo) => {
    return {
        type: RECEIVE_TWIT_USER,
        userInfo
    }
}

export const clearUser = () => {
    return {
        type: CLEAR_USER
    }
}
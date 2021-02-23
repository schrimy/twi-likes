import {
    RECEIVE_TWIT_USER,
    CLEAR_USER
} from '../utils/constants'

//sends received user info to the relevant reducer to populate the store
export const receiveUser = (userInfo) => {
    return {
        type: RECEIVE_TWIT_USER,
        userInfo
    }
}

//tells the reducer to clear the user info data held in the store
export const clearUser = () => {
    return {
        type: CLEAR_USER
    }
}
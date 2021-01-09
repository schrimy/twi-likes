import { RECEIVE_TWIT_USER } from '../utils/constants'

export const receiveUser = (userInfo) => {
    return {
        type: RECEIVE_TWIT_USER,
        userInfo
    }
}
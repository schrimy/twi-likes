import { RECEIVE_TWIT_USER, CLEAR_USER } from '../utils/constants'

const user = (state = null, action) => {
    switch(action.type) {
        case RECEIVE_TWIT_USER:
            return {
                ...action.userInfo
            }
        case CLEAR_USER:
            return null
        default:
            return state
    }
}

export default user
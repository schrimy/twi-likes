import { RECEIVE_TWIT_USER } from '../utils/constants'

const user = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_TWIT_USER:
            return {
                ...action.userInfo
            }
        default:
            return state
    }
}

export default user
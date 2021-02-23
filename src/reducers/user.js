import {
    RECEIVE_TWIT_USER,
    CLEAR_USER
} from '../utils/constants'

//default null so we know if a user has been successfully searched
//store received twitter user data or clear it when requested or new search is made
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
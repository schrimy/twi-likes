import { USER_CLICKED } from '../utils/constants'

const userClicked = (state = null, action) => {
    switch(action.type) {
        case USER_CLICKED:
            return action.userName
        default:
            return state
    }
}

export default userClicked
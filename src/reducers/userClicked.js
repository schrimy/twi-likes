import { USER_CLICKED } from '../utils/constants'

//simple reducer to store a clicked username from the likes/faves list to determine when a new search is needed
//also avoid complicated passing of props, another option could be use of portal?
const userClicked = (state = null, action) => {
    switch(action.type) {
        case USER_CLICKED:
            return action.userName
        default:
            return state
    }
}

export default userClicked
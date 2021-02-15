import { receiveUser, clearUser } from './user'
import { receiveFaves, clearFaves } from './favorites'
import { getTwitLikes, getTwitUser } from '../utils/helpers'
import { userClicked } from './userClicked'

//call helpers then the favourite and user receive actions
export const handleUserInfo = (userName) => {
 return (dispatch) => {
     return Promise.all([getTwitLikes(userName), getTwitUser(userName)])
     .then(([likes, user]) => {
        if(likes.length !== 0) { dispatch(receiveFaves(likes)) }
        
        dispatch(receiveUser(user))
        return({
            likes,
            user
        })
     })
 }
}

//separate data into needed slices and dispatch to relevant actions to be sent to reducers
export const handleLocalStorage = (lsData) => {
    return (dispatch) => {
        /*dispatch(receiveFaves(lsData.likes))
        dispatch(receiveUser(lsData.user))*/
        dispatch(userClicked(lsData.data.username))
    }
}

//shared thunk to clear both likes/faves list and user details when a new search is performed
export const handleClearing = () => {
    return (dispatch) => {
        dispatch(clearFaves())
        dispatch(clearUser())
    }
}
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

//loac storage username is sent to userClicked action in order to reload up to date likes list
export const handleLocalStorage = (lsData) => {
    return (dispatch) => {
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
import { receiveUser } from './user'
import { receiveFaves } from './favorites'
import { getTwitLikes, getTwitUser } from '../utils/helpers'

const handleError = () => {
    alert('Oh! User name not found, please check and try again')
}

//call helpers then the favourite and user receive actions
export const handleUserInfo = (userName) => {
 return (dispatch) => {
     Promise.all([getTwitLikes(userName), getTwitUser(userName)])
     .then(([likes, user]) => {
        likes.length === 0
        ? handleError()
        : dispatch(receiveFaves(likes))

        console.log('user details:', user)
        dispatch(receiveUser(user))
     })
     .catch(err => {
         console.log('error getting user data', err)
     })
 }
}
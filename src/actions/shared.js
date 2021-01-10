import { receiveUser } from './user'
import { receiveFaves } from './favorites'
import { getTwitLikes, getTwitUser } from '../utils/helpers'

//call helpers then the favourite and user receive actions
export const handleUserInfo = (userName) => {
 return (dispatch) => {
     return Promise.all([getTwitLikes(userName), getTwitUser(userName)])
     .then(([likes, user]) => {
        if(likes.length !== 0) { dispatch(receiveFaves(likes)) }
        
        dispatch(receiveUser(user))
     })
 }
}
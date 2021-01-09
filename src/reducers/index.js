import { combineReducers } from 'redux'
import favourites from './favourites'
import user from './user'

export default combineReducers({
    favourites,
    user
})
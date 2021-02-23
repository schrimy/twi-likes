import { combineReducers } from 'redux'
import favourites from './favourites'
import user from './user'
import userClicked from './userClicked'

//consolidate reducers for when store is created
export default combineReducers({
    favourites,
    user,
    userClicked
})
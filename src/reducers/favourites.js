import { RECEIVE_FAVE_TWEETS, CLEAR_FAVE_TWEETS } from '../utils/constants'

const favourites = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_FAVE_TWEETS:
            return {
                ...action.faveTweets
            }
        case CLEAR_FAVE_TWEETS:
            return null
        default:
            return state
    }
}

export default favourites
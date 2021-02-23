import {
    RECEIVE_FAVE_TWEETS,
    CLEAR_FAVE_TWEETS
} from '../utils/constants'

//sends action to reducers to receive liked tweets with the faveTweets payload obj after returned from server
export const receiveFaves = (faveTweets) => {
    return {
        type: RECEIVE_FAVE_TWEETS,
        faveTweets
    }
}

//when called it tells the reducer to remove any held liked tweets in store
export const clearFaves = () => {
    return {
        type: CLEAR_FAVE_TWEETS
    }
}
import { RECEIVE_FAVE_TWEETS } from '../utils/constants'

//sends action to reducers to receive fave tweets with the faveTweets payload obj
export const receieveFaves = (faveTweets) => {
    return {
        type: RECEIVE_FAVE_TWEETS,
        faveTweets
    }
}
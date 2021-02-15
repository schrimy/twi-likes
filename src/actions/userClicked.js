import { USER_CLICKED } from '../utils/constants'

//called when either a user's profile pic or name is clicked, or when localStorage is enabled and has username saved and the page is reloaded
//sends the username to the reducer causing the twitter api to feed back an up to date likes list for that username.
export const userClicked = (userName) => {
    return {
        type: USER_CLICKED,
        userName
    }
}
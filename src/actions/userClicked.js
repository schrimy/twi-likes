import { USER_CLICKED } from '../utils/constants'

export const userClicked = (userName) => {
    return {
        type: USER_CLICKED,
        userName
    }
}
import { applyMiddleware } from 'redux'
import logger from './logger'
import thunk from 'redux-thunk'

//consolidates middleware to be applied to redux store creation
export default applyMiddleware(
    thunk,
    logger
)
import React from 'react'
import UserInfo from './UserInfo'

const Fave = (props) => {
    //grab wanted parameters from passed in data prop for tweet
    const { text, created_at, user } = props.data

    //close off the passing of dangerous html to populate the text of the rendered text
    const createMarkup = () => {
        return {
            __html: text
        }
    }

    //TODO: see about formatting date either from api end or here for created_at

    return(
        <div className='border border-dark rounded mb-3 p-2'>
            <UserInfo userData={ user } />
            <p dangerouslySetInnerHTML={ createMarkup() }></p>
            <span>{ created_at }</span>
        </div>
    )
}

export default Fave
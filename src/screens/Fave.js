import React, { useEffect, useState } from 'react'
import UserInfo from './UserInfo'

const Fave = (props) => {
    //grab wanted parameters from passed in data prop for tweet
    const { full_text, created_at, user } = props.data
    const [dateText, setDateText] = useState('')

    useEffect(() => {
        const parsedDate = Date.parse(created_at)
        setDateText(new Date(parsedDate).toDateString())
    }, [created_at])

    //close off the passing of dangerous html to populate the text of the rendered text
    const createMarkup = () => {
        return {
            __html: full_text
        }
    }

    return(
        <div className='container border border-dark rounded mb-3 p-2'>
            <UserInfo userData={ user } />
            <p className='pl-5' dangerouslySetInnerHTML={ createMarkup() }></p>
            <span className='pl-5'>{ dateText }</span>
        </div>
    )
}

export default Fave
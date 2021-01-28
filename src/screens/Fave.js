import React, { useEffect, useState } from 'react'
import UserInfo from './UserInfo'

const Fave = (props) => {
    //grab wanted parameters from passed in data prop for tweet
    const { full_text, created_at, user, entities } = props.data

    const [dateText, setDateText] = useState('')

    //parse the date text into more readable format only once when the date string is changed i.e. first brough in
    useEffect(() => {
        const parsedDate = Date.parse(created_at)
        setDateText(new Date(parsedDate).toDateString())
    }, [created_at])

    //https://www.geeksforgeeks.org/javascript-replace-multiple-strings-with-multiple-other-strings/
    //helper to remove unwanted url's in text field, is sent an array of urls to add to regex which is used to know what to replace.
    const stringReplace = (arr) => {

        const re = new RegExp(arr.map(item => (
            item.url
        )).join('|'), 'gi')

        return full_text.replace(re, '')
    }

    //close off the passing of dangerous html to populate the text of the rendered text
    const createMarkup = () => {
        return {
            __html: entities.media !== undefined
                    ? stringReplace(entities.media)
                    : full_text
        }
    }

    //TODO: remove media url from text via regex and media -> url params

    return(
        <div className='border border-dark rounded p-2 fave xyz-in' xyz='fade down stagger-3'>
            <UserInfo userData={ user } />
            <p className='pl-5 pr-5 ml-2' dangerouslySetInnerHTML={ createMarkup() }></p>
            {
                entities.media !== undefined &&(
                    entities.media.map(image => (
                        <div className='w-100 pl-5 pr-5 ml-2'>
                            <img className='w-100 rounded xyz-nested' xyz='fade small' src={ image.media_url } alt='tweet embeded media' key={ image } />
                        </div>
                    ))
                )
            }
            <span className='pl-5 ml-2'>{ dateText }</span>
        </div>
    )
}

export default Fave
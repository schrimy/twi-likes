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

    //https://stackoverflow.com/questions/4870769/removing-backslashes-from-strings-in-javascript
    //regex to find url links matching from data in tweet text and turns them into usable links
    const makeLink = (bodyString) => {
        const re = new RegExp(entities.urls.map(link => (
            link.url
        )).join('|'), 'gi')

        return bodyString.replace(re, `<a href=${re.source.replace(/\\\//g, '/')} target="_blank">${re.source.replace(/\\\//g, '/')}</a>`)
    }

    //TODO: check to see if it works when tweet has multiple links in body
    //function to return string obj, that looks for and replaces media urls and then turns other urls into links
    const checkForUrls = () => {
        let contentString = ''

        //check tweet text for image links and replace them with an image + remove from text
        entities.media !== undefined
            ? contentString = stringReplace(entities.media)
            : contentString = full_text

        //then check text for other links in text and replace them with a html formatted link to click through for user
        entities.urls.length !== 0 &&(contentString = makeLink(contentString))

        //pass back re formatted text to display in body
        return contentString
    }

    //close off the passing of dangerous html to populate the text of the rendered text
    const createMarkup = () => {
        return {
            __html: checkForUrls()
        }
    }

    return(
        <div className='border border-light rounded p-2 fave xyz-in' xyz='fade down stagger-3'>
            <UserInfo userData={ user } />
            <p className='pl-md-5 pr-md-5 ml-2' dangerouslySetInnerHTML={ createMarkup() }></p>
            {
                entities.media !== undefined &&(
                    entities.media.map(image => (
                        <div className='w-100 pl-md-5 pr-md-5 pr-3 ml-2' key={ image.media_url }>
                            <img className='w-100 rounded xyz-nested' xyz='fade small' src={ image.media_url } alt='tweet embeded media' />
                        </div>
                    ))
                )
            }
            <span className='pl-md-5 ml-2'>{ dateText }</span>
        </div>
    )
}

export default Fave
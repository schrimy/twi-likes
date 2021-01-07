import React from 'react'

const Fave = (props) => {
    //grab wanted parameters from passed in data prop for tweet
    const { text } = props.data

    //close off the passing of dangerous html to populate the text of the rendered text
    const createMarkup = () => {
        return {
            __html: text
        }
    }

    return(
        <div dangerouslySetInnerHTML={createMarkup()}></div>
    )
}

export default Fave
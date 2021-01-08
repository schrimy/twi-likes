import React from 'react'

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
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col-auto pl-0'>
                        <img src={ user.profile_image_url } className='img-fluid rounded-circle' alt='twitteruser profile' />
                    </div>
                    <div className='col pl-1'>
                        <strong className='row'>{ user.name }</strong>
                        <span className='row'>@{ user.screen_name }</span>
                    </div>
                </div>
            </div>
            <p dangerouslySetInnerHTML={ createMarkup() }></p>
            <span>{ created_at }</span>
        </div>
    )
}

export default Fave
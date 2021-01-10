import React from 'react'

const UserInfo = (props) => {

    const { profile_image_url, name, username, screen_name } = props.userData

    return(
        <div className='container mb-3'>
            <div className='row'>
                <div className='col-auto pl-0'>
                    <img src={ profile_image_url } className='img-fluid rounded-circle' alt='twitteruser profile' />
                </div>
                <div className='col pl-1'>
                    <strong className='row'>{ name }</strong>
                    <span className='row'>@{ screen_name || username }</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
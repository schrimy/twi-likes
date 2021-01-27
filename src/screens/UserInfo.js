import React from 'react'
import { connect } from 'react-redux'
import { userClicked } from '../actions/userClicked'

const UserInfo = (props) => {

    const { profile_image_url, name, username, screen_name } = props.userData

    const handleClick = () => {
        console.log('user click:', screen_name || username)
        props.userClicked(screen_name || username)
    }

    return(
        <div className='list-container pb-2'>
            <div className='container row'>
                <div className='col-auto clickable p-0' onClick={ handleClick }>
                    <img src={ profile_image_url } className='img-fluid rounded-circle mr-2' alt='twitter user profile' />
                </div>
                <div className='col-auto'>
                    <strong className='row'>{ name }</strong>
                    <span className='row clickable' onClick={ handleClick }>@{ screen_name || username }</span>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { userClicked })(UserInfo)
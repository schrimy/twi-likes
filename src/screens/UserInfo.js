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
        <div className='container mb-3'>
            <div className='row'>
                <div className='col-auto pl-0' onClick={ handleClick }>
                    <img src={ profile_image_url } className='img-fluid rounded-circle' alt='twitter user profile' />
                </div>
                <div className='col pl-1'>
                    <strong className='row'>{ name }</strong>
                    <span className='row' onClick={ handleClick }>@{ screen_name || username }</span>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { userClicked })(UserInfo)
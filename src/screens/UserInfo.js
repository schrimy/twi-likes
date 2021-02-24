import React from 'react'
import { connect } from 'react-redux'
import { userClicked } from '../actions/userClicked'

const UserInfo = (props) => {
    //destructure passed in props to use for diaplyed user info component
    const {
        profile_image_url,
        name,
        username,
        screen_name
    } = props.userData

    //when the user name is clicked grab the name and send it to relevant action to be dispatched to reducer and stored
    const handleClick = () => {
        props.userClicked(screen_name || username)
    }

    //renders out component containing the relevant user image, name and username
    return(
        <div className='pb-2'>
            <div className='container row m-0 p-0'>
                <div className='col-auto clickable p-0' onClick={ handleClick }>
                    <img src={ profile_image_url } className='img-fluid rounded-circle mr-2' alt='twitter user profile' />
                </div>
                <div className='col p-0'>
                    <strong className='row m-0'>{ name }</strong>
                    <span className='row clickable m-0' onClick={ handleClick }>@{ screen_name || username }</span>
                </div>
            </div>
        </div>
    )
}

//null state props as we are using this to dispatch the userClick action
export default connect(null, { userClicked })(UserInfo)
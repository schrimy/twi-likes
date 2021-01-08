import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getTwitLikes, getTwitUser } from '../utils/helpers'
import { receieveFaves } from '../actions/favorites'

//TODO: try again with bootstrap alerts when username error occurs

const TwitUserForm = (props) => {
    const { receieveFaves } = props
    const [userName, setUserName] = useState('')

    const handleError = () => {
        alert('Oh! User name not found, please check and try again')
    }

    //TODO: get Twitter user details first
    //TODO: do the async helper calls need to go into a thunk action?
    const handleSubmit = (evt) => {
        evt.preventDefault()

        getTwitLikes(userName)
        .then((faveTweets) => {
            console.log('retrieved user info:', faveTweets)
            faveTweets.length === 0
            ? handleError()
            : receieveFaves(faveTweets)

            setUserName('')
        })
        .catch(err => {
            console.log('error fetching user data:', err)
            handleError()
        })
    }

    return(
        <div>
            <form className='input-group mb-4' onSubmit={ handleSubmit }>
                <input
                    type='text'
                    className='form-control'
                    value={ userName }
                    placeholder='Twitter username'
                    onChange={ (evt) => setUserName(evt.target.value) }
                />
                <button 
                    type='submit'
                    className='btn btn-secondary'
                    disabled={ userName === '' }
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default connect(null, { receieveFaves })(TwitUserForm)
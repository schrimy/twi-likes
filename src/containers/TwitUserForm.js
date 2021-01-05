import React, { useState } from 'react'
import { getTwitUser } from '../utils/helpers'

//TODO: try again with boostrap alerts when username error occurs

const TwitUserForm = () => {
    const [userName, setUserName] = useState('')

    const handleError = () => {
        alert('Oh! User name not found, please check and try again')
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        getTwitUser(userName)
        .then((twitUser) => {
            console.log('retrieved user info:', twitUser)
            if (twitUser.length === 0) { handleError() }
            setUserName('')
        })
        .catch(err => {
            console.log('error fetching user data:', err)
            handleError()
        })
    }

    return(
        <div className='container'>
            <form className='form-group' onSubmit={ handleSubmit }>
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

export default TwitUserForm
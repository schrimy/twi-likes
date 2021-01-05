import React, { useState } from 'react'
import { getTwitUser } from '../utils/helpers'

const TwitUserForm = () => {
    const [userName, setUserName] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        getTwitUser(userName)
        .then((twitUser) => {
        console.log('retrieved user info:', twitUser)
        })
        .catch(err => {
        console.log('error fetching user data:', err)
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
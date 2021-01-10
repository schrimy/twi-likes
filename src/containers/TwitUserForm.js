import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo } from '../actions/shared'

//TODO: try again with bootstrap alerts when username error occurs

const TwitUserForm = (props) => {
    const { handleUserInfo } = props
    const [userName, setUserName] = useState('')

    const handleError = () => {
        alert('Oh! User name not found, please check and try again')
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //thunk action returns promise to get info, has it's own .then when successful to populate store state
        handleUserInfo(userName)
        .then(() => {
            setUserName('')
        })
        .catch(err => {
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

export default connect(null, { handleUserInfo })(TwitUserForm)
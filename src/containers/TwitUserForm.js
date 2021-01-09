import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo } from '../actions/shared'

//TODO: try again with bootstrap alerts when username error occurs

const TwitUserForm = (props) => {
    const { handleUserInfo } = props
    const [userName, setUserName] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //TODO: clear user name input
        handleUserInfo(userName)
        //setUserName('')
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
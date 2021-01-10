import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo } from '../actions/shared'

const TwitUserForm = (props) => {
    const { handleUserInfo, errorCallBack } = props
    const [userName, setUserName] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //thunk action returns promise to get info, has it's own .then when successful to populate store state
        handleUserInfo(userName)
        .then(() => {
            setUserName('')
        })
        .catch(err => {
            //error caught from thunk action fires callback to display alert in app.js
            console.log('error getting user data', err)
            errorCallBack()
        })
    }

    return(
        <div>
            <form className='input-group mb-4' onSubmit={ handleSubmit }>
                <input
                    autoFocus={true}
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
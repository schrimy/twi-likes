import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo } from '../actions/shared'
import { clearFaves } from '../actions/favorites'

const TwitUserForm = (props) => {
    const { handleUserInfo, clearFaves, errorCallBack } = props
    const [userName, setUserName] = useState('')

    /*when submitting a user name search dispatch clearFaves to clear the favesList,
    in case there is an error therefore not showing an unrelated list*/
    const handleSubmit = (evt) => {
        evt.preventDefault()
        clearFaves()

        //thunk action returns promise to get info, has it's own .then when successful to populate store state
        handleUserInfo(userName)
        .then(() => {
            setUserName('')
        })
        .catch(err => {
            //error caught from thunk action fires callback to display alert in app.js
            console.log('error getting user data', err)
            errorCallBack(true)
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

export default connect(null, { handleUserInfo, clearFaves })(TwitUserForm)
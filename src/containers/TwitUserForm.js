import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo } from '../actions/shared'
import { clearFaves } from '../actions/favorites'

const TwitUserForm = (props) => {
    const { handleUserInfo, clearFaves, errorCallBack } = props
    const [userName, setUserName] = useState('')
    const spinner = useRef(null)

    //TODO: set up storing of data to LS when a search is successfull in the form
    /*when submitting a user name search dispatch clearFaves to clear the favesList,
    in case there is an error therefore not showing an unrelated list*/
    const handleSubmit = (evt) => {
        evt.preventDefault()
        clearFaves()
        spinner.current.hidden = false

        //thunk action returns promise to get info, has it's own .then when successful to populate store state
        handleUserInfo(userName)
        .then(() => {
            setUserName('')
            spinner.current.hidden = true
        })
        .catch(err => {
            //error caught from thunk action fires callback to display alert in app.js
            console.log('error getting user data', err)
            errorCallBack(true)
            spinner.current.hidden = true
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
                    placeholder='Enter Twitter username'
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
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status' hidden={ true } ref={ spinner }>
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { handleUserInfo, clearFaves })(TwitUserForm)
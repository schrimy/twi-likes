import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo } from '../actions/shared'
import { clearFaves } from '../actions/favorites'
import { TWITTER_DATA_KEY } from '../utils/constants'

import Alert from '../screens/Alert'

const TwitUserForm = (props) => {
    const { handleUserInfo, clearFaves } = props
    const [userName, setUserName] = useState('')
    const [userError, setUserError] = useState(false)
    const spinner = useRef()

    useEffect(() => {
        spinner.current.hidden = true
    })

    /*when submitting a user name search dispatch clearFaves to clear the favesList,
    in case there is an error therefore not showing an unrelated list*/
    const handleSubmit = (evt) => {
        evt.preventDefault()
        clearFaves()
        spinner.current.hidden = false
        setUserError(false)

        //thunk action returns promise to get info, has it's own, then when successful to populate store state
        handleUserInfo(userName)
        .then((data) => {
            setUserName('')
            spinner.current.hidden = true
            localStorage.setItem(TWITTER_DATA_KEY, JSON.stringify(data))
            setUserError(false)
        })
        .catch(err => {
            //error caught from thunk action changes error state to show alert component
            console.log('error getting user data', err)
            spinner.current.hidden = true
            setUserError(true)
        })
    }

    return(
        <div>
            <button className='btn btn-primary' type='button' data-toggle='collapse' data-target='#collapseForm' aria-expanded='false' aria-controls='collapseForm'>v</button>
            <div className='collapse' id='collapseForm'>
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
            </div>
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status' ref={ spinner }>
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
            {
                userError &&(
                    <Alert cb={ setUserError } />
                )
            }
        </div>
    )
}

export default connect(null, { handleUserInfo, clearFaves })(TwitUserForm)
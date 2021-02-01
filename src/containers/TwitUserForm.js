import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { handleUserInfo, handleClearing } from '../actions/shared'
import { TWITTER_DATA_KEY } from '../utils/constants'

import Alert from '../screens/Alert'
import Icons from 'bootstrap-icons/bootstrap-icons.svg'

//TODO: either via local-storage or store state, check storage pref to allow or block saving search name to local-storage

const TwitUserForm = (props) => {
    const { handleUserInfo, handleClearing, userClicked } = props
    const [userName, setUserName] = useState('')
    const [userError, setUserError] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
    const spinner = useRef()
    const nameInput = useRef()

    useEffect(() => {
        spinner.current.hidden = true
    })

    /**
     * if a userInfo component detects a click it changes the store state to reflect this and this component is subscribed to that change,
     * therefore when this change occurs send the handle submit function the name clicked to search for likes in that user name.
     **/
    useEffect(() => {
        if(userClicked !== null) {
            console.log('use effect for user click')
            handleSubmit(new Event('click'), userClicked)
        }
    }, [userClicked])//eslint-disable-line react-hooks/exhaustive-deps

    /*when submitting a user name search dispatch clearFaves to clear the favesList,
    in case there is an error therefore not showing an unrelated list*/
    const handleSubmit = (evt, searchName) => {
        evt.preventDefault()
        handleClearing()
        spinner.current.hidden = false
        setUserError(false)

        //thunk action returns promise to get info, has it's own, then when successful to populate store state
        handleUserInfo(searchName)
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
            <div className='container d-flex flex-column pt-3'>
                <button
                    id='collapseBtn'
                    className='btn btn-primary p-1 d-flex justify-content-center align-items-center'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseForm'
                    aria-expanded='false'
                    aria-controls='collapseForm'
                    onClick={ () => setCollapsed(!collapsed) }>
                        <svg className="bi d-flex" width="20" height="10" fill="currentColor" role='img'>
                            {
                                collapsed
                                    ? <use xlinkHref={ `${Icons}#chevron-down` } />
                                    : <use xlinkHref={ `${Icons}#chevron-up` } />
                            }
                        </svg>
                        <span className='text-uppercase small'>Search</span>
                </button>
                <div className='collapse show flex-grow-1' id='collapseForm'>
                    <form className='input-group' onSubmit={ (evt) => handleSubmit(evt, userName) }>
                        <input
                            ref={ nameInput }
                            autoFocus={ true }
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


//TODO: only return this if not null? check past react Udacity courses to do this here?
function mapStateToProps({ userClicked }) {
    console.log('twit form clicked user name:', userClicked)
    return {
        userClicked
    }
}

export default connect(mapStateToProps, { handleUserInfo, handleClearing })(TwitUserForm)
import React, { useState } from 'react'

const TwitUserForm = () => {
    const [userName, setUserName] = useState('')

    return(
        <div className='container'>
            <form className='form-group'>
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
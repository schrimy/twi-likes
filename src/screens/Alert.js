import React from 'react'

const Alert = (props) => {

    //function to call the callback passed in to reset the error boolean -> hidding the alert
    const handleClick = () => {
        props.cb(false)
    }

    //Displays bootstrap alert component, clicking the x calls passed in callback to reset alert, therefore can be shown again
    return(
        <div className='alert alert-warning' id='alert' role='alert'>
            <strong>Oh!</strong> That user name doesn't work, please try again.
            <button type='button' className='close' aria-label='Close' onClick={ handleClick }>
                <span aria-hidden='true'>&times;</span>
            </button>
        </div>
    )
}

export default Alert
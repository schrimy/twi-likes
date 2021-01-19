import React from 'react'
//import $ from 'jquery'

//TODO: somehow reset userError state in app.js at same time or after fade transition? i.e get fade working too.
const Alert = (props) => {
    const { cb } = props

    /*$('#alert').on('close.bs.alert', () => {
        console.log('closing alert')
        cb(false)
    })*/

    const handleClick= () => {
        cb(false)
    }

    //Displays bootstrap alert component, clicking the x calls passed in callback to reset alert, therefore can be shown again
    return(
        <div className='alert alert-warning alert-dismissible fade show' id='alert' role='alert'>
            <strong>Oh!</strong> That user name doesn't work, please try again.
            <button type='button' className='close' data-dismiss='alert' aria-label='Close' onClick={ handleClick }>
                <span aria-hidden='true'>&times;</span>
            </button>
        </div>
    )
}

export default Alert
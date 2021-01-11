import React from 'react'

const Alert = (props) => {
    const { cb } = props

    //Displays bootstrap alert component, clicking the x calls passed in callback
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oh!</strong> That user name doesn't work, please try again.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => { cb(false) }}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert
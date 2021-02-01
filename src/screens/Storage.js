import React from 'react'

//TODO: set up callback for save btn click to store pref choice in local-storage

const Storage = () => {
    return(
        <div className='fixed-bottom bg-light pb-3'>
            <div className='d-flex flex-column align-items-center'>
                <h5 className='pt-2'>Storage option, please choose</h5>
                <hr className='border border-dark w-25 mt-0' />
                <div className='custom-control custom-switch mb-3'>
                    <input type='checkbox' className='custom-control-input' id='customSwitch1' defaultChecked />
                    <label className='custom-control-label' htmlFor='customSwitch1'>
                        This option saves your last search, on your computer, for next time. If turned off the search will be lost.
                    </label>
                </div>
                <button className='btn btn-primary'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Storage
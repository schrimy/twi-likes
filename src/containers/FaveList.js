import React from 'react'
import { connect } from 'react-redux'

import Fave from '../screens/Fave'

const FaveList = () => {
    return(
        <div>
            A faves list
        </div>
    )
}

export default connect()(FaveList)
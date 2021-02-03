import React from 'react'
import { connect } from 'react-redux'

import Fave from '../screens/Fave'

//displays a list of the returned favourite tweets, placing each in an individual fave component
const FaveList = (props) => {
    const { faveList } = props

    //show list of liked tweets and who they have been liked by
    return(
        <div className='pr-0 d-flex flex-column'>
            <div className='container pt-3 pb-3 fave-list'>
                {
                    faveList !== null
                        ? faveList.map(fave => (
                            <Fave key={ fave.id } data={ fave } />
                        ))
                        : <p>They have no likes!!</p>
                }
            </div>
        </div>
    )
}

//grabs the favourites from store state and returns an array verison
function mapStateToProps({ favourites }) {
    return {
        faveList: favourites !== null 
            ? Object.keys(favourites).map(fave => (
                favourites[fave]
            ))
            : null
    }
}

export default connect(mapStateToProps)(FaveList)
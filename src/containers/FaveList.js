import React from 'react'
import { connect } from 'react-redux'

import Fave from '../screens/Fave'

//displays a list of the returned favourite tweets, placing each in an individual fave component
const FaveList = (props) => {
    const { faveList } = props

    //show list of liked tweets and who they have been liked by
    return(
        <div>
            <section className='mb-3'>
                Tweets liked by:
            </section>
            {
                faveList.map(fave => (
                    <Fave key={ fave.id } data={ fave } />
                ))
            }
        </div>
    )
}

//grabs the favourites from store state and returns an array verison
function mapStateToProps({ favourites }) {
    return {
        faveList: Object.keys(favourites).map(fave => (
            favourites[fave]
        ))
    }
}

export default connect(mapStateToProps)(FaveList)
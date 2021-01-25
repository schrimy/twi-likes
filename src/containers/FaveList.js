import React from 'react'
import { connect } from 'react-redux'

import Fave from '../screens/Fave'
import UserInfo from '../screens/UserInfo'

//displays a list of the returned favourite tweets, placing each in an individual fave component
const FaveList = (props) => {
    const { faveList, user } = props

    //show list of liked tweets and who they have been liked by
    return(
        <div className='container list-container mt-4'>
            <section className='mb-3'>
                <p className='mb-2'>Tweets liked by:</p>
                <UserInfo userData={ user } />
            </section>
            <div className='fave-list'>
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
function mapStateToProps({ favourites, user }) {
    return {
        user: user.data,
        faveList: favourites !== null 
            ? Object.keys(favourites).map(fave => (
                favourites[fave]
            ))
            : null
    }
}

export default connect(mapStateToProps)(FaveList)
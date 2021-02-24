const devPath = 'http://localhost:3001'

//async call the server twitter api to get a specific user, send reject on failure to be handled
const getTwitLikes = async (userName) => {
   const res = await fetch(`${devPath}/getTwits/${userName}`)
    
    try {
        const data = await res.json()
        return data
    } catch(e) {
        return Promise.reject(res)
    }
}

//async call the server twitter api to get the user information and pass back. If rejected the failure is passed back to be handled correctly
const getTwitUser = async (userName) => {
    const res = await fetch(`${devPath}/getUser/${userName}`)

    try {
        const user = await res.json()
        return user
    } catch(e) {
        return Promise.reject(res)
    }
}

export {
    getTwitLikes,
    getTwitUser
}
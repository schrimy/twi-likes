//async call the twitter api to gey a specific user
const getTwitLikes = async (userName) => {
   const res = await fetch(`http://localhost:3001/getTwits/${userName}`)
    
    try {
        const data = await res.json()
        return data
    } catch(e) {
        return Promise.reject(res)
    }
}

//TODO: call server method to get user details via api 2
const getTwitUser = async (userName) => {
    const res = await fetch(`http://localhost:3001/getUser/${userName}`)
}

export {
    getTwitLikes,
    getTwitUser
}
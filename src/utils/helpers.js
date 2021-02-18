const devPath = 'http://localhost:8000'
//async call the twitter api to gey a specific user
const getTwitLikes = async (userName) => {
   const res = await fetch(`${devPath}/getTwits/${userName}`)
    
    try {
        const data = await res.json()
        return data
    } catch(e) {
        return Promise.reject(res)
    }
}

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
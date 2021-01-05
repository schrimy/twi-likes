//async call the twitter api to gey a specific user
const getTwitUser = async (userName) => {
   const res = await fetch(`http://localhost:3001/getTwit/${userName}`)
    
    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting twit data', e)
    }
}

export {
    getTwitUser
}
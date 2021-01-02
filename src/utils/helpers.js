//async call the twitter api to gey a specific user
const getTwitUser = async () => {
   const res = await fetch('http://localhost:3001/getTwit')
    
    try {
        const data = await res.json()
        console.log('got twit data', data)
    } catch(e) {
        console.log('error getting twit data', e)
    }
}

export {
    getTwitUser
}
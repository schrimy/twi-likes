require('dotenv').config()
const Twitter = require('twitter-v2')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.static('public'))
app.use(cors())

app.get('/', () => {
    console.log('welcome!')
})

//TODO: may need to use different client to access the v1.1 -> faves list

app.get('/getTwit', (req, res) => {
    const client = new Twitter({
        consumer_key: process.env.REACT_APP_KEY,
        consumer_secret: process.env.REACT_APP_SECRET_KEY,
        /*access_token_key: process.env.REACT_APP_ACCESS_TOKEN,
        access_token_secret: process.env.REACT_APP_ACCESS_SECRET*/
    })

    //endpoint url and params here
    client.get('users/by/username/spazy_t')
    .then(data => {
        console.log('twit data:', data)
        res.send(data)
    })
    .catch(err => {
        console.log('error with twit:', err)
    })
})

app.listen(3001, () => {
    console.log('server listening on port 3001')
})
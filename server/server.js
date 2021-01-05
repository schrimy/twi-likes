require('dotenv').config()
const Twitter = require('twitter-lite')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.static('public'))
app.use(cors())

app.get('/', () => {
    console.log('welcome!')
})

app.get('/getTwit/:user', (req, res) => {
    const userName = req.params.user

    const client = new Twitter({
        version: 1.1,
        consumer_key: process.env.REACT_APP_KEY,
        consumer_secret: process.env.REACT_APP_SECRET_KEY,
        access_token_key: process.env.REACT_APP_ACCESS_TOKEN,
        access_token_secret: process.env.REACT_APP_ACCESS_SECRET
    })

    //endpoint url and params here
    client.get('favorites/list', {
        count: 10,
        screen_name: userName
    })
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
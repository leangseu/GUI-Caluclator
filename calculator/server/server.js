// Import node modules, express for web server
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

// Use environment variable, else use default port 4000
const PORT = process.env.PORT || '4000'
const APP_ID = 'UWJ8HT-8EGKLUK433'
const app = express()

// use urlencode and json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Enable CORS to the API 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

/**
 * Make GET request to this route, for example,
 * localhost:4000/integral%202x
 */
app.get('/:input', (req, res) => {
  // get input from request parameter
  const { input } = req.params
  axios.get(`https://api.wolframalpha.com/v2/query?&input=${input}&format=image&output=JSON&appid=${APP_ID}`)
  .then(response => {
    res.send(response.data)
  })
})

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`)
})
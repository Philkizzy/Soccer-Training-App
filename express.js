import express from 'express'
import bodyParser from 'body-parser'
require('dotenv')
require('./routes/track-routes')

//run express
const app = express() 

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// mount routes
app.use('/', track-routes)

app.listen(process.env.PORT, () => {
    console.log("Running on port 3000" )
})

export default app
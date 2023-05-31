const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors = require('cors');

const router = require('./routes/data')


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json())

app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

app.use('/api/v1', router)


const port = 3010
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
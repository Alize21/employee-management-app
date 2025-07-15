const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use('/', require('./routes/root'))

app.listen(port, () => console.log(`server listening at port : ${port}`))
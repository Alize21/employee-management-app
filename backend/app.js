const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

morgan.token('local-date', () => {
    return new Date().toLocaleString() 
})
app.use(morgan(':remote-addr - :remote-user [:local-date] ":method :url HTTP/:http-version" :status :response-time ms :res[content-length]', {
    stream: {   
        write: message => logger.info(message.trim())
    }
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use('/', require('./routes/root'))
app.use('/login', require('./routes/login'))

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => console.log(`server listening at port : ${port}`))
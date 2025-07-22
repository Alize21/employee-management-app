const jwt = require('jsonwebtoken')
require('dotenv').config()

const accessValidation = (req, res, next) => {
    const {authorization} = req.headers

    // check auth
    if (!authorization) {
        return res.status(401).json({
            msg: `token is required`,
            error: true
        })
    }

    // check token format
    const tokenPart = authorization.split(' ')
    if (tokenPart[0] !== 'Bearer' || !tokenPart[1]) {
        return res.status(401).json({
            msg: 'invalid authorization header format', 
            error: true
        })
    }

    // verify token
    try {
        const token = tokenPart[1]
        const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
        next()
    } catch (err) {
        return res.status(403).json({
            msg: `invalid or expired token`,
            error: true
        })
    }
}

module.exports = {accessValidation}
const authorizeRole = (roles = []) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                msg: `forbidden, you don't have access to this resource`,
                error: true
            })
        }
        
        next()
    }
}

module.exports = {authorizeRole}
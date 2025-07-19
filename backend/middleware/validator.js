const Employee = require('../models/employee')
const isValidUsername = username => {
    if (username.length >= 8) return true

    return false
}

const isValidPassword = password => {
    if (password.length >= 8) return true

    return false
}

const checkId = async id => {
    try {
        userId = await Employee.findById(id)
        if (userId) return true
    } catch (err) {
        throw err
    }
}

module.exports = {isValidUsername, isValidPassword, checkId}
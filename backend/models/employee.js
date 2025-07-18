const mongoose = require('../config/database')

const Employee = mongoose.model('Employee', {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ['admin', 'employee'],
            message: '{VALUE} is not a valid role'
        }

    }
})

module.exports = Employee
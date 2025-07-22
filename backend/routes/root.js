const express = require('express')
const router = express.Router()
const {getAllUsers, createNewUser, updateUser, deleteUser} = require('../controllers/userController')
const {accessValidation} = require('../middleware/accessValidation')

router.route('/')
    .get(accessValidation, getAllUsers)
    .post(accessValidation, createNewUser)
    .patch(accessValidation, updateUser)
    .delete(accessValidation, deleteUser)

module.exports = router
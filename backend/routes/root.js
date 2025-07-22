const express = require('express')
const router = express.Router()
const {getAllUsers, createNewUser, updateUser, deleteUser} = require('../controllers/userController')
const {accessValidation} = require('../middleware/accessValidation')
const {authorizeRole} = require('../middleware/authorizeRole')

router.route('/')
    .get(accessValidation, getAllUsers)
    .post(accessValidation, authorizeRole(["admin"]), createNewUser)
    .patch(accessValidation, authorizeRole(["admin"]), updateUser)
    .delete(accessValidation, authorizeRole(["admin"]), deleteUser)

module.exports = router
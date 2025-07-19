const Employee = require('../models/employee')
const bcrypt = require('bcryptjs')
const {isValidUsername, isValidPassword} = require('../middleware/validator')

function getAllData() {
 return Employee.find()
}

const getAllUsers = async (req, res) => {
    const users = await getAllData()

    // if array is empty
    if(!users.length) {
        return res.status(200).json({
            msg: `Data still empty`,
        })
    }

    res.status(200).json(users)
}

const createNewUser = async (req, res) => {
    const {username, password, role} = req.body

    // handle request if one of required field is missing
    if (!username || !role || !password) {
        return res.status(400).json({
            msg: `all fields are required`,
            error: true
        })
    }
    
    // check if username and password meet criteria
    if (!isValidUsername(username) || !isValidPassword(password)) {
        return res.status(400).json({
            msg: `username and password must be 8 characters long`,
            error: true
        })
    }

    // handle if username already taken
    const duplicateUsername = await Employee.findOne({username})
    if (duplicateUsername) {
        return res.status(409).json({
            msg: `employee name with name ${username} already taken`,
            error: true
        })
    }

    // insert new data
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        await Employee.create({username, password: hashedPassword, role})

        res.status(201).json({
            msg: 'new data successfully inserted'
        })
    } catch(err) {
        res.status(500).json({
            msg: `failed to create user`,
            error: err.message
        })
    }
}

const updateUser = async (req, res) => {
    const {username, role} = req.body
    const id = req.body.id

    // handle if received no id
    if(!id) {
        return res.status(400).json({
            msg: `id are required!`,
            error: true
        })
    }

    // handle request if required fields is missing
    if (!username && !role) {
        return res.status(400).json({
            msg: `received no data to be updated`,
            error: true
        })
    }

    // handle if id doesn't match with any id in database
    let targetId
    try {
        targetId = await Employee.findById(id)
        if (!targetId) {
            return res.status(404).json({
                msg: `id with id : ${id} was not found!`,
                error: true
            })
        }
    } catch {
        return res.status(400).json({
            msg: `${id} is not a correct id format`,
            error: true
        })
    }

     // check if username and password meet the criteria
    if (!isValidUsername(username)) {
        return res.status(400).json({
            msg: `username must be 8 characters long`,
            error: true
        })
    }

    // handle if username already taken
    const newUsername = username || targetId.username
    const duplicateUsername = await Employee.findOne(
        {username : newUsername, _id: {$ne: id}}
    )
    if (duplicateUsername) {
        return res.status(409).json({
            msg: `employee name with name ${newUsername} already taken`,
            error: true
        })
    }

    // update data
    try {
        const updateFields = {}
        if (username) updateFields.username = username
        if (role) updateFields.role = role

        await Employee.findByIdAndUpdate(id,
            {$set: updateFields},
            {runValidators: true}
        )

        res.status(200).json({
            msg: 'data successfully updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: `failed to update user`,
            error: err.message
        })
    }
}

const deleteUser = async (req, res) => {
    const id = req.body.id

    // handle if received no id
    if(!id) {
        return res.status(400).json({
            msg: `id is required!`,
            error: true
        })
    }

    // handle if id doesn't match with any id in database
    let user
    try {
        user = await Employee.findById(id)
        if (!user) {
            return res.status(404).json({
                msg: `user with id : ${id} was not found!`,
                error: true
            })
        }
    } catch {
        return res.status(400).json({
            msg: `invalid id format`,
            error: true
        })
    }

    // delete existing data
    try {
        await Employee.deleteOne({_id: user._id})
        res.status(200).json({
            msg: `data ${user.username} successfully deleted`
        })
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message })
    }

}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}


let data = [
    {id : 1, employee: 'Alize', role: 'admin'},
    {id : 2, employee: 'Alice', role: 'employee'},
    {id : 3, employee: 'Jambul', role: 'employee'},
]

const getAllUsers = (req, res) => {

    // if array empty
    if(!data.length) {
        return res.status(200).json({
            msg: `Data still empty`,
        })
    }

    res.status(200).json(data)
}

const createNewUser = (req, res) => {
    const newData = req.body || {}

    // handle request if received no data
    if (!Object.keys(newData).length) {
        return res.status(400).json({
            msg: 'No data was received',
            error: true
        })
    }
    
    // handle request if one of required fields is missing
    if (!newData.employee || !newData.role) {
        return res.status(400).json({
            msg: `received no ${newData.employee ? 'role' : 'employee'} data`,
            error: true
        })
    }

    // prevent custom id from request
    if (newData.id) {
        delete newData.id
    }

    // insert new data
    const newId = data.length > 0 ? data.at(-1).id + 1 : 1
    data.push({id: newId, ...newData})

    res.status(200).json({
        msg: 'new data successfully inserted'
    })
}

const updateUser = (req, res) => {
    const newData = req.body || {}
    const id = req.body.id

    // handle if received no id
    if(!id) {
        return res.status(400).json({
            msg: `id are required!`,
            error: true
        })
    }

    // handle request if one of required fields is missing
    if (!newData.employee || !newData.role) {
        return res.status(400).json({
            msg: `received no ${newData.employee ? 'role' : 'employee'} data`,
            error: true
        })
    }
    
    // handle if received id don't match with any id in data array
    const dataTarget = data.find(user => user.id === id)
    if (!dataTarget) {
        return res.status(400).json({
            msg: `there's no id with id: ${id} found`,
            error: true
        })
    }
    
    // handle if username already taken
    const duplicateEmployeeName = data.find(user => user.employee === newData.employee && user.id !== id)
    if (duplicateEmployeeName) {
        return res.status(400).json({
            msg: `employee name with name ${newData.employee} already taken`,
            error: true
        })
    }

    // update data
    const filteredData = data.filter(user => user.id !== id) 
    console.log(filteredData, newData)
    data = [...filteredData, newData]

    res.status(200).json({
        msg: 'data successfully updated'
    })
}

const deleteUser = (req, res) => {
    const id = req.body.id

    // handle if received no id
    if(!id) {
        return res.status(400).json({
            msg: `id are required!`,
            error: true
        })
    }

    // handle if received id don't match with any id in data array
    const dataTarget = data.find(user => user.id === id)
    if (!dataTarget) {
        return res.status(400).json({
            msg: `there's no id with id: ${id} found`,
            error: true
        })
    }

    // delete existing data
    const filteredData = data.filter(user => user.id !== id) 
    data = filteredData

    res.status(200).json({
        msg: `data with id: ${id} successfully deleted`
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser, 
    deleteUser
}


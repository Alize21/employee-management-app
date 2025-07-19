const isValidUsername = username => {
    if (username.length >= 8) return true

    return false
}

const isValidPassword = password => {
    if (password.length >= 8) return true

    return false
}

module.exports = {isValidUsername, isValidPassword}
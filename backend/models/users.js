const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    userName: String,
    password: String,
    token: String
})

const User = mongoose.model('users', userSchema)

module.exports = User
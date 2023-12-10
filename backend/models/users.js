const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    token: String,
    credits: Number,
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: 'events'}
})

const User = mongoose.model('users', userSchema)

module.exports = User
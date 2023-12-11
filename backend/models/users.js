const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    stock: Number,
    token: String,
    credits: Number,
    eventsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'events'}],
    cardsId: [Number]
})

const User = mongoose.model('users', userSchema)

module.exports = User
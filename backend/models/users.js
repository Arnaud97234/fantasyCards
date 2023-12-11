const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    stock: Number,
    token: String,
    credits: Number,
    eventsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'events'}],
    cardsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'cards'}]
})

const User = mongoose.model('users', userSchema)

module.exports = User
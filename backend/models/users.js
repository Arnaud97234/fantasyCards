const mongoose = require('mongoose')

const packIdSchema = mongoose.Schema({
    packId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'packs' }],
    quantity: Number
})

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    stock: Number,
    token: String,
    credits: Number,
    cardsId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cards' }],
    packsId: [packIdSchema]
})

const User = mongoose.model('users', userSchema)

module.exports = User
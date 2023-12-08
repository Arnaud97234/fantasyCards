const mongoose = require('mongoose')

const cardPriceSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    price: Number
})

const cardSchema = mongoose.Schema({
    teamId: {type: mongoose.Schema.Types.ObjectId, ref: 'teams'},
    rarity: Number,
    supply: Number,
    picture: String,
    stock: Number,
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: 'events'},
    cardPrices: [cardPriceSchema]
})

const Card = mongoose.model('cards', packSchema)

module.exports = Card
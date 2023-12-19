const mongoose = require('mongoose')

const cardPriceSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    price: Number
})

const cardSchema = mongoose.Schema({
    teamId: Number,
    name: String,
    rarity: Number,
    stock: Number,
    picture: String,
    eventsId: { type: mongoose.Schema.Types.ObjectId, ref: 'events' },
    cardPrices: [cardPriceSchema]
})

const Card = mongoose.model('cards', cardSchema)

module.exports = Card
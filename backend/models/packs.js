const mongoose = require('mongoose')

const packPriceSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    price: Number
})

const packSchema = mongoose.Schema({
    rarity: Number,
    supply: Number,
    packPrices: [packPriceSchema]
})

const Pack = mongoose.model('packs', packSchema)

module.exports = Pack
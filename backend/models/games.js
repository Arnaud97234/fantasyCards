const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    teamHomeId: {type: mongoose.Schema.Types.ObjectId, ref: 'teams'},
    teamAwayId: {type: mongoose.Schema.Types.ObjectId, ref: 'teams'},
    startDate: Date,
    endDate: Date,
    status: String,
    winner: {type: mongoose.Schema.Types.ObjectId, ref: 'teams'}
})

const Game = mongoose.model('games', packSchema)

module.exports = Game
const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    title: String,
    startDate: Date,
    endDate: Date,
    status: String,
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: 'games'}
})

const Event = mongoose.model('events', eventSchema)

module.exports = Event
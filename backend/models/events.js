const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    title: String,
    startDate: Date,
    endDate: Date,
    status: String,
    userIds: [String]
})

const Event = mongoose.model('events', eventSchema)

module.exports = Event
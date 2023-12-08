const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    name: String,
    sport: String
})

const Team = mongoose.model('teams', teamSchema)

module.exports = Team
var express = require("express")
var router = express.Router()
require("../models/connection")

const Game = require("../models/games")
const Team = require("../models/teams")
const User = require("../models/users")
const Event = require("../models/events")

router.get("/gameByEvent/:userToken", (req, res) => {
    User.findOne({ 'token': req.params.userToken })
        .populate("eventsId").populate({ path: "eventsId", populate: { path: "gamesId" } }).lean().then(data => {
            res.json({ result: 1, events: data })
        })
})

router.get("/teamsByGame/:teamHome/:teamAway", (req, res) => {
    Team.find({ "id": req.params.teamHome })
        .then(home => {
            Team.find({ "id": req.params.teamAway })
                .then(away => res.json({ teamHome: home, teamAway: away }))
        })
})

module.exports = router

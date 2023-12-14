var express = require("express")
var router = express.Router()
require("../models/connection")

const Game = require("../models/games")
const Team = require("../models/teams")
const User = require("../models/users")
const Event = require("../models/events")

router.get("/teamsByGame/:userToken", (req, res) => {
    User.findOne({ 'token': req.params.userToken })
        .populate("eventsId").populate({ path: "eventsId", populate: { path: "gamesId" } }).lean().then(data => {
            data.eventsId.map((e) => {
                e.gamesId.map((e) => {
                    Team.findOne({ "id": e.teamHomeId })
                        .then(home => {
                            Team.findOne({ "id": e.teamAwayId })
                                .then(teams => res.json({ teamHome: home, teamAway: teams }))
                        })
                    //    Team.findOne({ "id": e.teamAwayId }).then(away => console.log("away: ", away))
                })
            }
            )

        })
})

module.exports = router

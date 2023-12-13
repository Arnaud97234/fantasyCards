var express = require("express");
var router = express.Router();

const Card = require("../models/cards");
const Team = require("../models/teams");

require("../models/connection");

router.get("/myCards/:idCard", (req, res) => {
    Card.findOne({ _id: req.params.idCard })
      .then((card) => {
        console.log(card.teamId)
        Team.findOne({id : card.teamId})
        .then((team) => {
            console.log(team)
            res.json({ result: true, team: team, card:card })
        });
      });
  });

module.exports = router;

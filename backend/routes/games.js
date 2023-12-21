var express = require("express");
var router = express.Router();

require("../models/connection");
const Game = require("../models/games");
const Team = require("../models/teams");

router.get("/MatchNotStarted", (req, res) => {
  Game.find({ status: "Match not started" }).then((games) => {
    if (games === null) {
      res.json({ result: false, error: "Events not found" });
      return;
    } else {
      res.json({ result: true, games });
    }
  });
});

router.get("/MatchFinished", (req, res) => {
  Game.find({ status: "Match Finished" }).then((games) => {
    if (games === null) {
      res.json({ result: false, error: "Events not found" });
      return;
    } else {
      res.json({ result: true, games });
    }
  });
});

router.get("/teams/:teamHomeId/:teamAwayId", async (req, res) => {
  const teamHome = await Team.findOne({ id: req.params.teamHomeId });
  const teamAway = await Team.findOne({ id: req.params.teamAwayId });

  res.json({
    teamHome: teamHome.name,
    imageTeamHome: teamHome.image,
    teamAway: teamAway.name,
    imageTeamAway: teamAway.image,
    
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();

require("dotenv").config();

require('../models/connection')
const Team = require('../models/teams')
const Card = require('../models/cards')
const Game = require('../models/games')

const apiHost = process.env.RAPIDAPI_HOST;
const apiKey = process.env.RAPIDAPI_KEY;

/* GET teams listing and add it to Database*/
// FIXME: Make league parameter dynamic (fetch all leagues ids wanted)
router.get('/setTeams', (req, res) =>  {
  fetch('https://v3.football.api-sports.io/teams?league=61&season=2023', {
    headers: {
      "x-rapidapi-host": apiHost,
      "x-rapidapi-key": apiKey,
    },
  })
  .then(response => response.json())
  .then(teamsList => {
    teamsList.response.map((e) => {
      const newTeam = new Team({
        id: e.team.id,
        name: e.team.name,
        country: e.team.country,
        image: e.team.logo,
        sport: 'football'
      })
      newTeam.save().then(console.log('teams added'))
    })
    .then(() => {
      Team.find().then((data) =>
        res.json({
          result: true,
          message: `${data.length} Teams successfully added!`,
        })
      );
    })
    .catch((err) => console.error(err));
})});

/* GET players for teams that are in db */
// FIXME: Make team parametter dynamic (fetch all team ids that are in db)
router.get('/setCards', function(req, res) {
  fetch('https://v3.football.api-sports.io/players/squads?team=80', {
  headers: {
    'x-rapidapi-host': apiHost,
    'x-rapidapi-key': apiKey
  }})
  .then(response => response.json())
  .then(playerList => {
    let id = playerList.response[0].team.id
    playerList.response[0].players.map((e) => {
        const newCard = new Card({
          teamId: id,
          name: e.name,
          rarity: 3,
          stock: 25,
          picture: e.photo,
          eventId: null,
          cardPrices: [
            {userId:'6576d0b8dbcfb883c78bd2fe', price:0},
            {userId:'6576d0b8dbcfb883c78bd2fe', price:0}
          ]
        })
        newCard.save()
    })
})
})

/* GET games for teams that are in db */
// FIXME: Make league parameter dynamic (fetch all league ids that are in db)
router.get('/setGames', function(req, res) {
  fetch('https://v3.football.api-sports.io/fixtures?league=61&season=2023', {
    headers: {
      'x-rapidapi-host': apiHost,
      'x-rapidapi-key': apiKey
    }
  })
  .then(response => response.json())
  .then(gamesList => {
    gamesList.response.map((e) => {
      console.log(e.fixture.id)
      const newGame = new Game({
        gamId: e.fixture.id,
        teamHomeId: e.teams.home.id,
        teamAwayId: e.teams.away.id,
        startDate: e.fixture.periods.first,
        endDate: e.fixture.periods.second,
        status: e.fixture.status.long,
        winnerTeamHome: e.teams.home.winner, 
        winnerTeamAway: e.teams.away.winner
      })
      newGame.save()
    })
  })
})


module.exports = router;

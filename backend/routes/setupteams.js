var express = require('express');
var router = express.Router();

require('dotenv').config()

require('../models/connection')
const Team = require('../models/teams')
const Card = require('../models/cards')

const apiHost = process.env.RAPIDAPI_HOST
const apiKey = process.env.RAPIDAPI_KEY

/* GET teams listing and add it to Database*/
router.get('/setTeams', (req, res) =>  {
  fetch('https://v3.football.api-sports.io/teams?league=61&season=2023', {
    headers: {
        'x-rapidapi-host': apiHost,
        'x-rapidapi-key': apiKey
    }
  })
  .then(response => response.json())
  .then(teamsList => {
    console.log(teamsList)
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
  }).then(() => {
     Team.find().then(data => res.json({
      result: true, message: `${data.length} Teams successfully added!` 
    }))})
    .catch(err => console.error(err))
})

  /* GET players for teams that are in the db */

router.get('/setCards', function(req, res) {
  Team.find().then(data => {
    data.map((e) => {
      fetch(`https://v3.football.api-sports.io/players/squads?team=${e.id}`, {
      //   headers: {
      //     'x-rapidapi-host': apiHost,
      //     'x-rapidapi-key': apiKey
      // }
      })
      .then(response => response.json())
      .then(playersList => {
        playersList.response.map((e) => {
          let id = e.team.id
          playersList.response[1].map((player) => {
            const newCard = new Card({
              teamId: id,
              name: player.name,
              picture: player.photo
            })
            newCard.save()
          })
        })
      }).then(() => {
        Card.find().then(data => res.json({
        result: true, message: `${data.length} Cards successfully added!`
        })) 
      })
      .catch(err => console.error(err))
    })
  })
})

module.exports = router;

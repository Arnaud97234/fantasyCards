var express = require("express")
var router = express.Router()

const Pack = require("../models/packs")
const User = require("../models/users")
const Card = require("../models/cards")

require("../models/connection");

router.get("/marketPacks", (req, res) => {
  Pack.find({ 'packPrices.price': { $gt: 0 } })
    .then((pack) => {
      res.json({ result: true, pack: pack })
    })
})

router.patch("/openPack/:userToken/:userPack", async (req, res) => {
  // find the pack to open
  const pack = await Pack.findOne({ "_id": req.params.userPack })

  // Decrease pack's Stock
  const newStock = Number(pack.stock) - 1
  await Pack.updateOne({ "_id": req.params.userPack }, { "stock": newStock })
  const packsEligible = []
  pack.packPrices.map((e) => {
    if (e.userToken == req.params.userToken) {
      packsEligible.push(e)
    }
  })

  const packToremove = packsEligible[0]._id
  // Remove user from Pack
  await Pack.updateOne(
    { "_id": req.params.userPack },
    { $pull: { "packPrices": { "_id": packToremove } } }
  )

  // Decrease pack quantity for user

  const packQtyToDecrease = await User.findOne({ "token": req.params.userToken })

  packQtyToDecrease.packsId.map((e) => {
    if (e.packId == req.params.userPack) {
      User.updateOne({
        "packsId": {
          "packId": req.params.userPack
        }
      }, {
        "packsId": {
          "quantity": packsEligible.length
        }
      })
    }
  })

  // Give 5 random cards to user
  const cardsToAdd = await Card.aggregate([
    { $sample: { size: 5 } }
  ])
  await cardsToAdd.map(async (card) => {
    await Card.updateOne({ "_id": card._id }, {
      $push: {
        "cardPrices": {
          price: 0,
          userToken: req.params.userToken
        }
      }
    })

    await User.updateOne({ "token": req.params.userToken }, { $push: { "cardsId": card._id } })
    res.json({ result: true, newCards: cardsToAdd })
  })
})

module.exports = router

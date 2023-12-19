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
    });
});

router.patch("/openPack/:userToken/:userPack", async (req, res) => {
  // find the pack to open
  const pack = await Pack.findOne({ "_id": req.params.userPack, "packPrices.userToken": req.params.userToken })
  // Decrease pack Stock
  const packToUpdate = pack.packPrices[0]._id
  const newStock = Number(pack.stock) - 1
  await Pack.updateOne({ "packPrices.userToken": req.params.userToken }, { "stock": newStock })

  // Remove user from Pack
  await Pack.updateOne(
    { "_id": req.params.userPack },
    { $pull: { "packPrices": { "_id": packToUpdate } } }
  )
  const cardsToAdd = await Card.aggregate([
    { $sample: { size: 5 } }
  ])
  console.log("cardsToAdd: ", cardsToAdd)
  await cardsToAdd.map(async (card) => {
    console.log(card)
    await Card.updateOne({ "_id": card._id }, { $push: { "cardPrices": { card } } })
    await User.updateOne({ "userToken": req.params.userToken }, { $push: { "cardsId": card.id } })
  })
})

module.exports = router

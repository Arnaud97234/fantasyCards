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

router.put("/open/:userToken/:subDocIdPack", async (req, res) => {
  const pack = await Pack.findOne({
    "packPrices.userToken": req.params.userToken,
    "packPrices._id": req.params.subDocIdPack,
  });
  

  console.log(pack);

  await Pack.updateOne(
    {
      "packPrices.userToken": req.params.userToken,
      "packPrices._id": req.params.subDocIdPack,
    },
    {
      $pull: {
        packPrices: { _id: req.params.subDocIdPack }
      }
    }
  );

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
  
  await User.updateOne(
    { token: req.params.userToken },
    {
      $pull: { packsId: pack._id }
    }
  );
  await User.updateOne({ "token": req.params.userToken }, { $push: { "cardsId": card._id } })

  
});
res.json({ result: true });})

module.exports = router;

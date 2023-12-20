var express = require("express");
var router = express.Router();

const Card = require("../models/cards");
const Team = require("../models/teams");
const User = require("../models/users");

require("../models/connection");

router.get("/marketCards", (req, res) => {
  Card.find({ "cardPrices.price": { $gt: 0 } }).then((card) => {
    console.log(card);
    res.json({ result: true, card: card });
  });
});

router.patch("/sell/:token/:subDocId", async (req, res) => {
  const card = await Card.findOne({
    "cardPrices.userToken": req.params.token,
    "cardPrices._id": req.params.subDocId,
  });
  const sub = card.cardPrices.find(
    (sd) => sd._id.toString() === req.params.subDocId
  );
  sub.price = req.body.price;
  await card.save();
  res.json(sub);
});


router.put("/buy/:buyertoken/:sellerToken/:subDocId", async (req, res) => {
  const card = await Card.findOneAndUpdate(
    {
      "cardPrices.userToken": req.params.sellerToken,
      "cardPrices._id": req.params.subDocId,
    },
    {
      $set: {
        "cardPrices.$.userToken": req.params.buyertoken,
        "cardPrices.$.price": 0,
      },
    }
  );

  console.log(card._id);

  const sub = card.cardPrices.find(
    (sd) => sd._id.toString() === req.params.subDocId
  );
  const buyer = await User.findOneAndUpdate(
    { token: req.params.buyertoken },
    {
      $push: { cardsId: card._id },
      $inc: { credits: -sub.price },
    }
  );

  const seller = await User.findOneAndUpdate(
    { token: req.params.sellerToken },
    {
      $pull: { cardsId: card._id },
      $inc: { credits: sub.price }
    }
  );

  res.json({ result: true });
});

module.exports = router;

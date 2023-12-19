var express = require("express");
var router = express.Router();

const Card = require("../models/cards");
const Team = require("../models/teams");

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

module.exports = router;

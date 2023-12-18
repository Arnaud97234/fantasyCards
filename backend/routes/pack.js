var express = require("express");
var router = express.Router();

const Pack = require("../models/packs");

require("../models/connection");

router.get("/marketPacks", (req, res) => {
  Pack.find({ 'packPrices.price': { $gt: 0 } })
      .then((pack) => {
        res.json({ result: true, pack:pack })
      });
  });

// router.patch('/sell/:token/:subDocId', async (req, res) => {
//       const card = await Card.findOne({ 'cardPrices.userToken': req.params.token, 'cardPrices._id': req.params.subDocId });
//       const sub = card.cardPrices.find(sd => sd._id.toString() === req.params.subDocId);
//       sub.price = req.body.price;
//       await card.save();
//       res.json(sub);
// });

module.exports = router;

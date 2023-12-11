var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");

router.get("/mycards", (req, res) => {
  User.findOne({ token: req.body.token })
    .then((user) => {
      if (user === null) {
        res.json({ result: false, error: "User not found" });
        return;
      } else {
        user.cardsId.forEach(card => {
          
        });
        res.json({ result: true, user: user });
      }
    });
});

module.exports = router;

var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["username", "email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Check if user is not already registered
  User.findOne({ email: req.body.email }).then((data) => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const token = uid2(32);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        token: token,
        credits: Math.floor(Math.random()*89999+10000),
        gamesId: ["6576fd7ad9e95bbd54710ad2"],
        cardsId: ["657725893a2c37b476ed7950", "657725893a2c37b476ed7953"],
        packsId: ["657ad5ea8f96e935b9b105a4"],
      });
      newUser.save().then((newDoc) => {
        res.json({
          result: true,
          token: newDoc.token,
          username: newDoc.username,
          gamesList: newDoc.gamesId,
          cardsList: newDoc.cardsId,
          packsList: newDoc.packsId,
        });
      });
    } else {
      // User already in db
      res.json({ result: false, error: "User exists already" });
    }
  });
});

router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  // Check if user is registred
  User.findOne({ email: req.body.email })
    .populate("cardsId packsId")
    .exec()
    .then((data) => {
      if (!data) {
        res.json({ result: false, error: "No account found" });
        return;
      }
      // Verify password
      if (!bcrypt.compareSync(req.body.password, data.password)) {
        res.json({ result: false, error: "Wrong password" });
        return;
      }
      res.json({
        result: true,
        token: data.token,
        username: data.username,
        gamesList: data.gamesId,
        cardsList: data.cardsId,
        packsList: data.packsId,
      });
    });
});

router.get("/user/:token", (req, res) => {
  User.findOne({ token: req.params.token }).then((data) => {
    res.json({
      result: true,
      username: data.username,
      credits: data.credits,
      games: data.gamesId,
      cards: data.cardsId,
      packs: data.packsId,
    });
  });
});

module.exports = router;

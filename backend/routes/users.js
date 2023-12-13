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
        credits: 3000,
        eventsId: ['65784e2953f4d5ab88d57892', '65785d8253f4d5ab88d57895'],
        cardsId: ['657725893a2c37b476ed7951','657725893a2c37b476ed7967']
      })
      newUser.save().then(newDoc => {
        res.json({ result: true, token: newDoc.token })
      })
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
  User.findOne({ email: req.body.email }).then((data) => {
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
      cardsList: data.cardsId,
      eventsList: data.eventsId
    });
  });
});

router.get("/user/:token", (req, res) => {
  User.findOne({ token: req.params.token }).then((data) => {
    res.json({
      result: true,
      username: data.username,
      credits: data.credits,
      cards: data.cardsId,
      events: data.eventsId
    });
  });
});


module.exports = router;

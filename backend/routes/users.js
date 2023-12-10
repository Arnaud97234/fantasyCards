var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res) => {
  if(!checkBody(req.body, ['username', 'email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' })
    return
  }

  // Check if user is not already registered
  User.findOne({ username: req.body.username }).then(data => {
    if(data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10)
      const token = uid2(32)

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        token: token
      })
      newUser.save().then(newDoc => {
        res.json({ result: true, token: newDoc.token })
      })
    } else {
      // User already in db
      res.json({ result: false, error: 'User exists already' })
    }
  })
})

module.exports = router;

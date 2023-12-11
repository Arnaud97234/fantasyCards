var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mycards', (req, res) => {

  // Check if user is not already registered
  User.findOne({ token: req.body.token }).then(user => {
    if (user === null) {
      res.json({ result: false, error: 'User not found' });
      return;
    }
  
      res.json({ result: true });
  });
});

module.exports = router;

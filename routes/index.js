var express = require('express');
var router = express.Router();
let database = require('../assets/dataBase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('首页')
});

module.exports = router;

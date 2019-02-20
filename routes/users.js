var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('my favorite song are try and 随意啦');
});

module.exports = router;

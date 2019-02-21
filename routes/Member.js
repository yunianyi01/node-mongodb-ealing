var express = require('express');
var router = express.Router();
let {_util} = require('../assets/utils');

/* add member. */
router.get('/', function(req, res, next) {
  res.send('首页');
 
  let data = {
    name: '求带',
    member1: '宗穗猪',
    member2: '胖胖',
    member3: '大爷',
  }
  _util.addDatas('make_a_profit', data)
});

module.exports = router;

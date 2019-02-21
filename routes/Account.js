let express = require('express');
let { _util } = require('../assets/utils');
let { commonFun } = require('../assets/fun')
let uuid = require('node-uuid');

exports.Account = {
  /**
   * @param create 创建Account数据
   */
  create() {
    let router = express.Router();
    router.get('/', function (req, res, next) {
      res.send('my favorite song are try and 随意啦');
      let count = Math.floor(Math.random(99) * 100) || 1
      let dataArray = new Array(count);
      dataArray.fill(0)
      dataArray.map((value, index) => {
        console.log(value)
          dataArray[index] = {
            _id: uuid.v4(),
            name: uuid.v4(),
            address: '广州花都'
          }
      })
      console.log(dataArray)
      _util.addDatas('accounts', dataArray)
    });
    return router;
  },

  /**
   * @param getAccount 获取Account数据
   */
  findAccount() {
    let router = express.Router();
    router.get('/', function (req, res, next) {
      res.send('首页');
      _util.findDatas('accounts')
    });
    return router;
  }
}







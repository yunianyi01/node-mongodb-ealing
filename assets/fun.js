let uuid = require('node-uuid');

exports.commonFun = {
  id() {
    let number = uuid.v1();
    console.log(number)
    return number
  }
}
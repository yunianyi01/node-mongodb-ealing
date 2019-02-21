let addMemberRouter = require('./Member');
let {Account} = require('./Account');

exports.touterArr = [{
  url: '/addMember',
  moudles: addMemberRouter
}, {
  url: '/users',
  moudles: Account.create()
}, {
  url: '/account',
  moudles: Account.findAccount()
}];
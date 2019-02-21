let {dbBase} = require('./dataBase');
exports._util = {
// 插入数据
  addDatas(collection, datas = {}){
    dbBase((db) => {
      db.collection(collection).insert(datas, (err, base) => {
        console.log('插入数据成功', base)
        db.close();
      })
    })
  },
  // 查找数据
  findDatas(collection, whereStr = {}) {
    dbBase((db) => {
      db.collection(collection).find(whereStr).toArray((err, result) => {
        if(err) throw err;
        console.log('查找一条数据成功', result)
      })
    })
  }
}


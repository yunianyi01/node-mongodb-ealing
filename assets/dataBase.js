// MongoDB 会自动创建数据库和集合，所以使用前我们不需要手动去创建。


let mongodbUrl = 'mongodb://localhost:27017/'

let mongodb = require('mongodb').MongoClient;

// 链接resume_demo数据库

exports.dbBase = (cb) => {
    mongodb.connect(mongodbUrl, (err, db) => {
      if (err) throw err
      console.log('数据库 resume_demo 创建成功')
      let dbbase = db.db('resume_demo');
      cb && cb instanceof Function && cb(dbbase, () => {
        db.close()
      })
      // 关闭数据库
      dbbase.on('close', (err, db) => {
        if (err) throw err;
        else console.log('成功关闭数据库')
      })
    })
  }

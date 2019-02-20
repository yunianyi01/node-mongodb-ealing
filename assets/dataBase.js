let mongodbUrl = 'mongodb://localhost:27017/resume_demo'

let mongodb = require('mongodb').MongoClient;

// 链接resume_demo数据库

export default dbBase = (collection, chart, cb) => {
  mongodb.connect(mongodbUrl, (err, db) => {
  if(err) throw err
  console.log('数据库 resume_demo 创建成功')
  let dbbase = db.db('resume_demo');
  dbbase.createCollection(collection, (err, base) => {
    console.log('创建集合成功');
    
  })
})
}

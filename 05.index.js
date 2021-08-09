//  链接数据库，没有向外导出变量直接使用
require("./tools/conn_mongo")

//  引入现有model
const Student = require("./tools/models/student")

//  使用model
Student.find({}, function(err, docs){
    if(!err){
        console.log(docs)
    }
})
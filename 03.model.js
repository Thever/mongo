// 1.引入mongoose
const mongooes = require("mongoose");
// 2.连接mongodb数据库
// mongodb://地址：端口/数据库名
// 如果端口号是默认端口号27017，则可以省略不写
mongooes.connect("mongodb://localhost/mongoose_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 3.监听mongodb数据库的连接状态
// 绑定数据库连接成功事件
mongooes.connection.once("open", function () {
    console.log("数据库连接成功");
});
// 绑定数据库连接失败事件
mongooes.connection.once("close", function () {
    console.log("数据库连接已经断开");
});

// 4.断开数据库连接(一般不用)
// mongooes只要连接上了，就不会自动断开，一般只需要连接一次，除非项目停止，服务器关闭，否则连接一般不会断开
// mongooes.disconnect();
// setTimeout(() => {
//     mongooes.disconnect()
// }, 0)

// 创建模式对象
const Schema = mongooes.Schema;
const stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})
// 创建模型对象
// 第一个参数表示创建的集合的名称，第二个参数表示利用的模式对象
// mongoose会自动将集合名变为复数
const StuModel = mongooes.model("student", stuSchema); 

// //  有了model就能对数据库进行增删改查操作
// const data = [
//     {
//         name:'jojo',
//         age:18,
//         gender:'male',
//         address:'日本'
//     },
//     {
//         name:'卡Q音',
//         age:18,
//         gender:'male',
//         address:'日本'
//     }
// ]
// StuModel.create(data, function (err) {
//     if (!err) {
//         console.log("插入成功");
//         //  arguments代表插入的内容
//         console.log(arguments)
//     } else {
//         console.log(err);
//     }
// });

// //  查询操作
// /* 
//     查询:
//     model.find(conditions,[projection],[options],callback)
//     conditions:查询的条件 
//     projection:投影  { name: 1, gender: 1, _id: 0 } 或 'name gender -_id'
//     options:查询选项  { skip: xx, limit: xx }   

//     model.findOne(...)
//     model.findById(...)

//     model.countDocuments(conditions,callback) 查询文档的数量
//  */
// //  find返回符合条件的数组
// //  返回全部
// StuModel.find({},function(err, docs){
//     if(!err){
//         //  没错输出查到的内容
//         console.log(docs)
//     }
// })
// //  返回孙悟空
// StuModel.find({name:'孙悟空'},function(err, docs){
//     if(!err){
//         //  没错输出查到的内容
//         console.log(docs)
//     }
// })
// //  只要name,不要_id
// StuModel.find({name:'孙悟空'},{name:1, _id:0}, function(err, docs){
//     if(!err){
//         //  没错输出查到的内容
//         console.log(docs)
//     }
// })
// //  另一种写法
// StuModel.find({name:'孙悟空'}, 'name -_id', function(err, docs){
//     if(!err){
//         //  没错输出查到的内容
//         console.log(docs)
//     }
// })
// // 跳过2个，返回2个name
// StuModel.find({},'name -_id',{skip:2, limit:2},function(err, docs){
//     if(!err){
//         //  没错输出查到的内容
//         console.log(docs)
//     }
// })

// // findOne只返回一个符合条件的对象
// StuModel.findOne({}, function(err, doc){
//     if(!err){
//         console.log(doc)
//     }
// })

// // findById只返回一个符合条件的对象
// StuModel.findById('610cf0e7c962d7329c89b9ce', function(err, doc){
//     if(!err){
//         console.log(doc)
//     }
// })
// //  获取当前model的文档数量
// StuModel.countDocuments({}, function (err, data) {
//     console.log(data);
// });

// //  通过find()查询的结果，数据库数据的返回对象，就是Document,文档对象
// //  Document对象是Model的实例，
// //  mongoose #号方法表示 Model的实例，也就是 Document,可以对应调用

// /* 修改：
//     model.update(conditions,[doc],[options],callback)
//     model.updateMany(conditions,[doc],[options],callback)
//     model.uodateOne(conditions,[doc],[options],callback)
//         conditions:查询条件
//         doc:修改后的文档对象
//         options:配置参数
//         callback：回调函数
// */
// StuModel.updateOne({name:'唐僧'}, {$set:{age:20}}, function(err){
//     if(!err){
//         console.log('修改成功')
//     }
// });
// StuModel.find({name:'唐僧'}, function(err, doc){
//     if(!err){
//         console.log('查询成功')
//         console.log(doc)
//     }
// });

// /* 
// /* 
// 删除：
// model.remove(conditions,callback)
// model.deleteOne(conditions,callback)
// model.deleteMany(conditions,callback)
// */
// StuModel.remove({name:'jojo'},function(err,doc){
//     if(!err){
//         console.log('删除成功')
//         console.log(doc)
//     }
// })
// StuModel.find({}, function(err, doc){
//     if(!err){
//         console.log('查询成功')
//         console.log(doc)
//     }
// });

// // 统计数量
// StuModel.count({},function(err, count){
//     if(!err){
//         console.log(count)
//     }
// })
// StuModel.count({name:'孙悟空'},function(err, count){
//     if(!err){
//         console.log(count)
//     }
// })
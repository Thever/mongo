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
/*
    Document 和 集合中的文档一一对应，Document 是 Model 的实例
        通过 Model 查询到的结果都是 Document
*/

//  创建一个Document
// var stu = new StuModel({
//     name:'奔波儿灞',
//     age:48,
//     gender:'male',
//     address:'碧波潭'
// })

// console.log(stu)

/*
    document的方法
        save([options],[fn])
*/
stu.save(function(err){
    if(!err){
        console.log('保存成功')
    }
})

StuModel.findOne({}, function(err, doc){
    if(!err){
        /*
            update(update,[optionss],[])
                - 修改对象，影响数据库内容
            updateOne
            updateMany
            remove([callback])
                - 删除对象
        */
        // console.log(doc)
        //  调用方法修改
        // doc.update({$set:{age:28}},function(err){
        //     if(err){
        //         console.log('修改成功')
        //     }
        // })
        //  直接修改保存
        // doc.age =  18
        // doc.save()
        // doc.remove(function(err){
        //     if(!err){
        //         console.log('猴哥再见')
        //     }
        // })
        /*
            get(name)
                - 获取文档中的指定属性值
            set(name, value)
                - 设置文档的指定的属性值
            id
                - 获取文档的_id属性值
            toJSON()
                - 转换为一个JSON对象,目前不能用，用JSON.stringify替换
            toObject()
                - 将Document对象转换为一个普通的JS对象，用于控制敏感数据的显示与否
                    转换为js对象后，所有的Document对象的方法或属性都不能使用了
        */
        // console.log(doc.get('name'))
        // console.log(doc.name)
        // doc.set('name','玄奘大师')
        // console.log(doc)
        // doc.name = '玄奘大师'
        // doc.save()
        // console.log(doc.id)
        // console.log(doc._id)
        // console.log(doc.toJSON())
        // console.log(JSON.stringify(doc))
        // console.log(doc.toObject())
        // //  隐藏address
        let show = doc.toObject()
        delete show.address
        console.log(show)
    }
})
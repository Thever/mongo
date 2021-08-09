/* 用来定义student的模型 */
const mongooes = require('mongoose')
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
//  导出内容
module.exports = StuModel;
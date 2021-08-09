/* 定义模块，用来链接MongoDB数据库 */
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
// // FILEPATH: /Users/bytedance/Documents/projects/testNativeIDE/test-ts/index.ts
// import http from 'http';
// const PORT = 3000; // 指定服务器监听的端口
// // 创建HTTP服务器
// const server = http.createServer((req, res) => {
//     // 设置响应头
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // 发送响应内容
//     res.end('Hello, Wovvvrld!\n');
// });
// // 服务器开始监听指定端口
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
//TODO 
// FILEPATH: /Users/bytedance/Documents/projects/testNativeIDE/test-ts/index.ts
import http from 'http';
const PORT1 = 3000; // 第一个服务器监听的端口
const PORT2 = 3001; // 第二个服务器监听的端口
// 创建第一个HTTP服务器
const server1 = http.createServer((req, res) => {
    // 设置响应头
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应内容
    res.end(`hello,world Connected to port ${PORT1}\n`);
});
// 创建第二个HTTP服务器
const server2 = http.createServer((req, res) => {
    // 设置响应头
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应内容
    res.end(`Connected to port ${PORT2}\n`);
});
// 第一个服务器开始监听指定端口
server1.listen(PORT1, () => {
    console.log(`Server1 is running on http://localhost:${PORT1}`);
});
// 第二个服务器开始监听指定端口
server2.listen(PORT2, () => {
    console.log(`Server2 is running on http://localhost:${PORT2}`);
});
//# sourceMappingURL=index.js.map
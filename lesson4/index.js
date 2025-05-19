const http = require("http");

http.createServer((req, res) => {
   res.end("Hello iam your first server");
}).listen(3000);

console.log(http)
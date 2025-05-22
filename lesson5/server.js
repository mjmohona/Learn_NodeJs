const http = require("http");
const port = 3000;
const hostname = '127.0.0.1' 

const myServer = http.createServer((req, res) => {
   res.writeHead(202, {'content-type':'text/html'});
   res.write("<h1>this is my task</h1>");
   res.end();
});

myServer.listen(port, hostname, ()=>{
console.log(`Your server is running successfully at http://${hostname}:${port}`);
});
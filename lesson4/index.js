const http = require("http");
const port = 3000;
const hostname = '127.0.0.1' 

const myServer = http.createServer((req, res) => {
   res.end("<h1>Hello I'm your first server</h1>");
})

myServer.listen(port, ()=>{
console.log(`Your server is running successfully at http://${hostname}:${port}`);
});
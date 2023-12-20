const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url == "/home"){
        res.end("Welcome home");
    }
    else if(req.url == "/about"){
        res.end("Welcome to About Us page"); 
    }
    else if(req.url == "/node"){
        res.end("Welcome to my Node Js project"); 
    }
    else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1>404 error page. page doesn't exist</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});
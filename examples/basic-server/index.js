const http = require("node:http");
const Chance = require("chance");

const chance = new Chance()

const server = http.createServer(function(request, response)  {
    response.writeHead(200, { "content-type":"text/html"});
    response.end(`Wake up, <b>${chance.animal()}<b>...`);
});

server.listen(1337, "127.0.0.1");

console.log("Servidor en http://127.0.0.1:1337");

 
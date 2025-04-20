import express from "express";
import http from "node:http";

const app = express();

app.get("/", (req, res, next) => {
    res.send("hello");
});

const server = http.createServer(app);

server.on("listening", () => {
    console.log("Server started on port 3000")
})
server.listen(3000);
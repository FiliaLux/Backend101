import http from "node:http";
import app from "./app.js";
import { resolve } from "node:path";

const port = process.env.PORT || 3000;

//const result = await(new Promise(resolve => setTimeout(resolve(), 5000)));

const server = http.createServer(app);

server.on("listening", () => {
    console.log(`Server started on http://localhost:${port}`)
})

server.listen(port);




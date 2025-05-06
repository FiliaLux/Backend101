"use strict";

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("phonecall", (payload) => {
    if (payload.caller === "sister") {
        return
    }
    console.log("ring ring");
});

emitter.once("phonecall", () => {
    console.log("buzz buzz");
});

emitter.emit("phonecall", {caller: "brother"});
emitter.emit("phonecall", {caller: "sister"});
emitter.emit("phonecall", {caller: "sister"});


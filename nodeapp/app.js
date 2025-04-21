import express from "express";
import createError from "http-errors";
import logger from "morgan";

const app = express();

app.use(logger("dev"));

app.get("/", (req, res, next) => {
    res.send("hello");
});

app.use((req, res, next) => {
    //const error = new Error("Algo ha salido mal...");
    //error.status = 404;
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`Error ${err.status} ${err.message}`);
});

export default app;
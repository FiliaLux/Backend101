import path from "node:path";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import * as homeController from "./controllers/homeController.js"
import connectMongoose from "./lib/connectMongoose.js";

await connectMongoose();
console.log("Connected to mongodb");

const app = express();

app.set("views", "views");
app.set("view engine", "html");
app.engine("html", (await import("ejs")).__express);


app.locals.appName = "NodeApp"

app.use(logger("dev"));
/* app.use(express.static("public")); */
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(import.meta.dirname, "public")));

/**
 * Application routes
 */
app.get("/", homeController.index);
app.get("/param-in-route/:num", homeController.paramInRoute);
app.get("/param-in-route-multiple/:product/size/:size/color/:color", homeController.paramInRouteMultiple);
app.get("/param-in-query", homeController.validateParamInQuery, homeController.paramInQuery);
app.post("/post-with-body", homeController.postWhithBody);

app.use((req, res, next) => {
    //const error = new Error("Algo ha salido mal...");
    //error.status = 404;
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    //res.send(`Error ${err.status} ${err.message}`);
    if (err.array) {
        err.message = "Invalid request: " + err.array().map(e =>
            `${e.location} ${e.type} "${e.path}" ${e.msg}`
        ).join(" ");
        err.status = 422;
        console.log(err);
    }
    
    res.locals.message = err.message
    res.locals.error = process.env.NODEAPP_ENV === "development" ? err : {}
    
    res.render("error");
});

export default app;
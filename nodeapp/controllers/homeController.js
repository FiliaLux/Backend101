import { query, validationResult } from "express-validator";
import Agent from "../models/Agent.js";

export async function index (req, res, next) {
    try {
        //res.locals.appName = "NodeApp"
        //throw new Error("fatal!");
        const userID = req.session.userID
        
        res.locals.agents = await Agent.find({owner: userID});
        
        const now = new Date();
        res.locals.isEven = (now.getSeconds() % 2) === 0;
        res.locals.thisSecond = now.getSeconds();
        
        res.locals.code = "<script>alert(Injected!)</script>";
        
        res.render("home", /*{appName: "NodeApp"}*/);
    
    } catch (error) {
        next(error);
    }  
};

export function paramInRoute (req, res, next) {
    const num = req.params.num;
    res.send("me has pasado " + num);
};

export function paramInRouteMultiple (req, res, next) {
    const product = req.params.product;
    const size = req.params.size;
    const color = req.params.color;

    res.send(`Quieres un ${product} de talla ${size} color ${color}`);
};

export function paramInQuery (req, res, next) {
    validationResult(req).throw();

    const color = req.query.color;

    console.log(req.query);

    res.send(`El color es ${color}`);
};

export function postWhithBody (req, res, next) {
    const {age, color} = req.body;
    res.send("OK!");
};

export const validateParamInQuery = [
    query("color").notEmpty().custom(value => {
        ["red","blue"].includes(value);
        return value === "blue"
        }
    ).withMessage("must be red or blue"),
    query("size").isNumeric().withMessage("must be a number")
];
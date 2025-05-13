import Agent from "../models/Agent.js";

export function index (req, res, next) {
    res.render("new-agent");
};

export async function postNew (req, res, next) {
    try {
        
        const {name, age} = req.body;
        const userID = req.session.userID;
        
        // validaciones
        
        // creo una instancia de agente en memoria
        const agent = new Agent({name, age, owner: userID});

        // lo guardo en base de datos
        await agent.save()

        res.redirect("/");

    } catch (error) {
        next(error)
    }
};

export async function deleteAgent (req, res, next) {
    try {
        
        const agentID = req.params.agentID;
        const userID = req.session.userID;
        await Agent.deleteOne({_id: agentID, owner: userID});

        res.redirect("/");

    } catch (error) {
        next(error)
    }
};
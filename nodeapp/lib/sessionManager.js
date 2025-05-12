import session from "express-session";

const INACTIVITY_EXPIRATION_2_DAYS = 1000 * 60 * 60 * 24 * 2;

//middleware para gestionar sesiones
export const middleware = session({
    name: "nodeapp-session",
    secret: "VkF8*b4FVYm@56WSVRBVCnBUDIr#*bqn&&*++j",
    savedUninitialized: true,
    resave: false,
    cookie: {maxAge: INACTIVITY_EXPIRATION_2_DAYS}
});
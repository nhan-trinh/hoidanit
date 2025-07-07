import express from "express";

const router = express.Router();

/**
 * 
 * @param {*} app 
 * @returns 
 */

const initWebRoutes = (app) => {   
    router.get("/", (req, res) => {
        return res.send("Hello world from web routes");
    })
    return app.use("/", router);

}   
export default initWebRoutes;
const { Router } = require("express");
const { create, getAllTasks, getByUserId } = require("../controller/task");

const routes = Router();
routes.post("/",create)
routes.get("/",getAllTasks)
routes.get("/:userId",getByUserId)
module.exports = routes;

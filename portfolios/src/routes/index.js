const portfolioController = require("../controllers/portfolio.controller");
const { Router } = require("express");

const routes = Router();

routes.post("/", portfolioController.save);

routes.get("/", portfolioController.list);

module.exports = routes;

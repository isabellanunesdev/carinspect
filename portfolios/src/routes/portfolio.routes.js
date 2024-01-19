const portfolioController = require("../controllers/portfolio.controller");
const { Router } = require("express");

const portfolioRoutes = Router();

portfolioRoutes.post("/", portfolioController.save);

portfolioRoutes.get("/", portfolioController.list);

module.exports = portfolioRoutes;

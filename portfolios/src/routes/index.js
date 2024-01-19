const portfolioRouter = require("./portfolio.routes");

const { Router } = require("express");

const routes = Router();

routes.use("/portfolios", portfolioRouter);

module.exports = routes;

const Portfolio = require("../models/portfolio.model");

class PortfolioRepository {
  async save(portfolioData) {
    const portfolio = new Portfolio(portfolioData);
    return await portfolio.save();
  }

  async list() {
    return await Portfolio.find({});
  }
}

module.exports = new PortfolioRepository();

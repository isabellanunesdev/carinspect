const portfolioService = require("../service/portfolio.service");

class PortfolioController {
  async save(req, res) {
    try {
      const portfolio = await portfolioService.save(req.body);
      res.status(201).json(portfolio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async list(req, res) {
    try {
      const portfolios = await portfolioService.list();
      res.status(200).json(portfolios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PortfolioController();

const portfolioRepository = require("../repositories/portfolio.repository");

class PortfolioService {
  async save(portfolioData) {
    try {
      return await portfolioRepository.save(portfolioData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async list() {
    try {
      return await portfolioRepository.list();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new PortfolioService();

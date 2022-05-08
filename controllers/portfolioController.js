const Portfolio = require("../models/portfolioModel");

// Get all portfolios
exports.get_allPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find();
  res.status(200).json({
    status: "200",
    msg: "All portfolios",
    portfolios,
  });
};

// Get a portfolio by portfolio Id
exports.get_portfolioById = async (req, res) => {
  const { id } = req.params;

  const portfolio = await Portfolio.findById(id);
  res.status(200).json({
    status: "200",
    msg: "Get a portfolio",
    portfolio,
  });
};

// Get a portfolios belonging to user
exports.get_portfolioByUser = async (req, res) => {
  const { id } = req.params;

  const userPortfolios = await Portfolio.find({ user: id });
  res.status(200).json({
    status: "200",
    msg: "Get a portfolio",
    userPortfolios,
  });
};

// Create a portfolio for a user
exports.post_createPortfolio = async (req, res) => {
  const { coins, portfolioName, userId } = req.body;

  const user = userId;
  const portfolio = await Portfolio.create({ portfolioName, coins, user });
  res.status(201).json({
    status: "201",
    msg: "Portfolio created.",
    portfolio,
  });
};

// Update a portfolio
exports.patch_updatePortfolio = async (req, res) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    status: "200",
    msg: "Portfolio updated",
    portfolio,
  });
};

// Delete a portfolio
exports.del_deletePortfolio = async (req, res) => {
  const { id } = req.params;
  await Portfolio.findByIdAndDelete(id);
  res.status(200).json({
    status: "200",
    msg: "Portfolio deleted",
  });
};

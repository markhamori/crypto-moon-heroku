const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Portfolio must belong to a User"],
  },
  portfolioName: {
    type: String,
    required: [true, "Choose a name for your portfolio"],
  },
  coins: {
    type: Array,
    required: [true, "At least, select one coin to create the portfolio."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;

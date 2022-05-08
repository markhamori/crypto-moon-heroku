const express = require("express");
const {
  get_allPortfolios,
  get_portfolioById,
  get_portfolioByUser,
  post_createPortfolio,
  patch_updatePortfolio,
  del_deletePortfolio,
} = require("../controllers/portfolioController");

const router = express();

router.get("/all-portfolios", get_allPortfolios);
router.get("/:id", get_portfolioById);
router.get("/user/:id", get_portfolioByUser);
router.patch("/update-portfolio/:id", patch_updatePortfolio);
router.post("/create-portfolio", post_createPortfolio);
router.delete("/delete-portfolio/:id", del_deletePortfolio);

module.exports = router;

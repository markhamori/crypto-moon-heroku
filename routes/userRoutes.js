const express = require("express");
const {
  get_userById,
  get_allUsers,
  post_loginUser,
  post_registerUser,
  patch_updateUser,
} = require("./../controllers/userController");

const router = express();

router.get("/", get_allUsers);
router.post("/login", post_loginUser);
router.get("/:id", get_userById);
router.post("/register", post_registerUser);
router.patch("/me/:id", patch_updateUser);

module.exports = router;

const express = require("express");
const rateLimiter = require("express-rate-limit");
const authenticateUser = require("../middleware/authentication");
const router = express.Router();
const { register, login, updateUser } = require("../controllers/auth");
const testUser = require("../middleware/test-user");

const apiLimiter = rateLimiter({
  window: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: "Too many reuqestes from this IP, Please try again after 15 minutes.",
  },
});
router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

module.exports = router;

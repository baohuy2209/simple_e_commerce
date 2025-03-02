const express = require("express");
const { login, logout, signup } = require("../controllers/auth.controller.js");

const router = express.Router();
router.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;

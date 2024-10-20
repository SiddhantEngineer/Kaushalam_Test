const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/register", authController.regiserUser);
router.post("/login", authController.loginUser);

module.exports = router;

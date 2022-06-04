const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

router.route("/").post(registerUser);
router.route("/login").get(loginUser);

module.exports = router;

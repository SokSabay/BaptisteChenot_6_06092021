const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const max = require("../middleware/limit");

router.post("/signup", userCtrl.signup);
router.post("/login", max.limiter, userCtrl.login);

module.exports = router;

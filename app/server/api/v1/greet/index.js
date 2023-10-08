const express = require("express");

const router = express.Router();

const greet = require("./greet");

router.get("", greet);

module.exports = router;

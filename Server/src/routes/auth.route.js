const express = require("express");
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

const router = express.router();

router.post('/register');

module.exports = router;

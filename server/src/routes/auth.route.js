const express = require("express");

const { authController } = require("../controllers");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/self", auth.verifyToken, authController.self);
router.post("/verify-email", auth.verifyToken);

module.exports = router;

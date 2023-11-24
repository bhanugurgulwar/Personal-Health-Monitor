const express = require("express");

const auth = require("../middlewares/auth");
const { userController } = require("../controllers");

const router = express.Router();

router.use(auth.verifyToken);

router.route("/")
.get(userController.getUsers);

module.exports = router;

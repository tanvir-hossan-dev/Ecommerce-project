const { register } = require("../controller/userContoller");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;

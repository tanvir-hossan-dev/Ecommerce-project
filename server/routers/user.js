const { register, login, logOut } = require("../controller/userContoller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logOut);

module.exports = router;

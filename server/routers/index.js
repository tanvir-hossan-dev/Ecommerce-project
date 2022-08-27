const router = require("express").Router();
const porductRouter = require("./Products");
const userRouer = require("./user");
const adminRouter = require("./Admin");
const Authenticate = require("../middleware/Authenticate");
const authorizeAdmin = require("../middleware/authorizeAdmin");

router.use("/api/v1/products", porductRouter);
router.use("/api/v1/auth", userRouer);
router.use("/api/v1/admin", Authenticate, authorizeAdmin, adminRouter);

module.exports = router;

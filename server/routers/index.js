const router = require("express").Router();
const porductRouter = require("./Products");
const userRouer = require("./user");
const adminRouter = require("./Admin");
const Authenticate = require("../middleware/Authenticate");

router.use("/api/v1/products", porductRouter);
router.use("/api/v1/auth", userRouer);
router.use("/api/v1/admin", Authenticate, adminRouter);

module.exports = router;

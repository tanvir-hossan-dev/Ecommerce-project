const router = require("express").Router();
const porductRouter = require("./Products");
const userRouer = require("./user");

router.use("/api/v1/products", porductRouter);
router.use("/api/v1/auth", userRouer);

module.exports = router;

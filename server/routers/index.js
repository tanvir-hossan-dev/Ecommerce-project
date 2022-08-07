const router = require("express").Router();
const porductRouter = require("./Products");

router.use("/api/v1/products", porductRouter);

module.exports = router;

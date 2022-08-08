const router = require("express").Router();
const {
  getallProducts,
  createProduct,
} = require("../controller/productController");

router.get("/", getallProducts);
router.post("/", createProduct);

module.exports = router;

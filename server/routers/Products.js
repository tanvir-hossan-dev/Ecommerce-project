const router = require("express").Router();
const {
  getallProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

router.get("/", getallProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

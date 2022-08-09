const router = require("express").Router();
const {
  getallProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");

router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/", getallProducts);
router.post("/", createProduct);

module.exports = router;

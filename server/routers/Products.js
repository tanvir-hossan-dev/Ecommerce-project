const router = require("express").Router();
const {
  getallProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");
const Authenticate = require("../middleware/Authenticate");

router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/", getallProducts);
router.post("/", Authenticate, createProduct);

module.exports = router;

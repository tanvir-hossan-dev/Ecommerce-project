const {
  getAlluser,
  updateUser,
  deleteUser,
} = require("../controller/adminController");

const router = require("express").Router();

router.get("/getAlluser", getAlluser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
module.exports = router;

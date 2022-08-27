const {
  getAlluser,
  updateUser,
  deleteUser,
} = require("../controller/adminController");

const router = require("express").Router();

const isAdmin = async (req, _res, next) => {
  if (req.user.role === "Admin") next();
};

router.get("/getAlluser", isAdmin, getAlluser);
router.patch("/updateuser/:id", isAdmin, updateUser);
router.delete("/deleteuser/:id", isAdmin, deleteUser);
module.exports = router;

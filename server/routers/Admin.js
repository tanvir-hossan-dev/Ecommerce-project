const router = require("express").Router();

const isAdmin = async (req, res, next) => {
  console.log(req.user);
  if (req.user.role === "Admin") next();
};

router.get("/adminget", isAdmin, async (req, res) => {
  res.json({ message: "this is admin router" });
});

module.exports = router;

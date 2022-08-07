const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ Message: "This is products router" });
});

module.exports = router;

const authorizeAdmin = async (req, res, next) => {
  console.log(req.user);
  if (req.user.role === "Admin") {
    next();
  } else {
    res.status(404).json({ Message: `Only Admin can access. You are a ${req.user.role}` });
  }
};

module.exports = authorizeAdmin;

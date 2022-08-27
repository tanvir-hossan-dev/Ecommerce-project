const authorizeAdmin = async (req, _res, next) => {
  console.log(req.user);
  if (req.user.role === "Admin") next();
};

module.exports = authorizeAdmin;

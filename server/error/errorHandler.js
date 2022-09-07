const errorHandler = (error, req, res, next) => {
  if (error.message) {
    res.status(500).json({ Message: error.message });
  } else {
    res.status(500).json({ Message: "There was an error" });
  }
};

module.exports = errorHandler;

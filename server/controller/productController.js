const Product = require("../models/Products");

const createProduct = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const create = await Product(body);
    res.status(200).json({ message: "Product create successful", create });
  } catch (err) {
    console.log(err);
  }
};

const getallProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getallProducts, createProduct };

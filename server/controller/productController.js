const Product = require("../models/Products");

const createProduct = async (req, res) => {
  req.body.user = req.user;
  try {
    const create = new Product(req.body);
    await create.save();
    res.status(200).json({ message: "Product create successful", create });
  } catch (err) {
    console.log(err);
  }
};

const getallProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    let product = await Product.findById(id);
    if (!product) {
      res.status(500).json({ Message: "Product not found" });
    }
    product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ Message: "Updte Successful", product });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(203).json();
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(500).json({ Message: "Product not found" });
    }
    res.status(201).json({ Message: "get single product", product });
  } catch {
    console.log(err);
  }
};

module.exports = {
  getallProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};

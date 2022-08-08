const mongoose = require("mongoose");

/**
 * name
 * description
 * price
 * rating
 * images, public_id, url
 * category
 * stock
 * numberofReviews
 * revies, name, rating, comment
 * createdAt
 */

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
    default: 1,
  },
  numberofReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;

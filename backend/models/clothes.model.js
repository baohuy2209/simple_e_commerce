const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    inventory_quantity: {
      type: Number,
      default: 1000,
    },
    selled_quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Clothes", clothesSchema);

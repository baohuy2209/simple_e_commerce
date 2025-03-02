const Clothes = require("../models/clothes.model");
const getAllClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find();
    if (!clothes) {
      return res
        .status(400)
        .json({ success: false, message: "Invalida credentials" });
    }
    res.status(200).json({
      success: true,
      messsage: "Get all clothes successfully",
      clothes: [...clothes],
    });
  } catch (error) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
const getDetailClothes = async (req, res) => {};
const createNewClothes = async (req, res) => {
  const { name, price, image, inventory_quantity, selled_quantity } = req.body;
  try {
    if (!name || !price || !image || !inventory_quantity || !selled_quantity) {
      throw new Error("All fields are required");
    }
    const newClothes = new Clothes({
      name,
      price,
      image,
      inventory_quantity,
      selled_quantity,
    });
    await newClothes.save();
    res.status(201).json({
      success: true,
      message: "New Clothes created successfully",
      clothes: {
        ...newClothes,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getAllClothes, getDetailClothes, createNewClothes };

const express = require("express");
const router = express.Router();
const clothesController = require("../controllers/clothes.controller");
router.get("/", clothesController.getAllClothes);
router.get("/:id", clothesController.getDetailClothes);
router.post("/create", clothesController.createNewClothes);
module.exports = router;

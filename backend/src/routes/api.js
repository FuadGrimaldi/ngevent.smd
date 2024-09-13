const express = require("express");
const router = express.Router();

const categoriesController = require("../Api/v1/controllers/categories.controller");

router.get("/cms/categories", categoriesController.getAllCategories);
router.post("/cms/categories", categoriesController.createCategories);
router.get("/cms/categories/:id", categoriesController.getCategoriesById);
router.put("/cms/categories/:id", categoriesController.updateCategories);
router.delete("/cms/categories/:id", categoriesController.deletedCategories);

module.exports = router;

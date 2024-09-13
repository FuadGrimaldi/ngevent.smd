const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const categoriesController = require("../Api/v1/controllers/categories.controller");
const imageController = require("../Api/v1/controllers/image.controller");

// categories
router.get("/cms/categories", categoriesController.getAllCategories);
router.post("/cms/categories", categoriesController.createCategories);
router.get("/cms/categories/:id", categoriesController.getCategoriesById);
router.put("/cms/categories/:id", categoriesController.updateCategories);
router.delete("/cms/categories/:id", categoriesController.deletedCategories);

// images
router.post(
  "/cms/images",
  upload.single("avatar"),
  imageController.createImage
);

module.exports = router;

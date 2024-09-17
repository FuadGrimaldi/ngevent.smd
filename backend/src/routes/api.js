const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const categoriesController = require("../Api/v1/controllers/categories.controller");
const imageController = require("../Api/v1/controllers/image.controller");
const talentController = require("../Api/v1/controllers/talent.controller");
const eventController = require("../Api/v1/controllers/event.controller");
const userController = require("../Api/v1/controllers/user.controller");
const authController = require("../Api/v1/controllers/auth.controller");

// loginCMS
router.post("/auth/signin", authController.signInCMS);

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

// Talent
router.post("/cms/talents", talentController.createTalent);
router.get("/cms/talents", talentController.getAllTalent);
router.get("/cms/talents/:id", talentController.getOneTalent);
router.put("/cms/talents/:id", talentController.updateTalent);
router.delete("/cms/talents/:id", talentController.deletedTalent);

// event
router.post("/cms/events", eventController.createEvent);
router.get("/cms/events", eventController.getAllEvent);
router.get("/cms/events/:id", eventController.getOneEvent);
router.put("/cms/events/:id", eventController.updateEvent);
router.delete("/cms/events/:id", eventController.deleteEvent);

// User
router.post("/organizers", userController.createOrganizer);

module.exports = router;

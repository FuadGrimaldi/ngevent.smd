const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const { authenticateUser, authorizeRoles } = require("../middlewares/auth");

const categoriesController = require("../Api/v1/controllers/categories.controller");
const imageController = require("../Api/v1/controllers/image.controller");
const talentController = require("../Api/v1/controllers/talent.controller");
const eventController = require("../Api/v1/controllers/event.controller");
const userController = require("../Api/v1/controllers/user.controller");
const authController = require("../Api/v1/controllers/auth.controller");

// loginCMS
router.post("/auth/signin", authController.signInCMS);

// categories
router.get(
  "/cms/categories/admin",
  authenticateUser,
  authorizeRoles("admin"),
  categoriesController.getAllCategories
);
router.get(
  "/cms/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  categoriesController.getAllCategoriesByOrganizer
);
router.post(
  "/cms/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  categoriesController.createCategories
);
router.get(
  "/cms/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  categoriesController.getCategoriesById
);
router.put(
  "/cms/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  categoriesController.updateCategories
);
router.delete(
  "/cms/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  categoriesController.deletedCategories
);

// images
router.post(
  "/cms/images",
  authenticateUser,
  authorizeRoles("admin", "organizer"),
  upload.single("avatar"),
  imageController.createImage
);

// Talent
router.post(
  "/cms/talents",
  authenticateUser,
  authorizeRoles("organizer"),
  talentController.createTalent
);
router.get(
  "/cms/talents",
  authenticateUser,
  authorizeRoles("organizer"),
  talentController.getAllTalent
);
router.get(
  "/cms/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  talentController.getOneTalent
);
router.put(
  "/cms/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  talentController.updateTalent
);
router.delete(
  "/cms/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  talentController.deletedTalent
);

// event
router.post(
  "/cms/events",
  authenticateUser,
  authorizeRoles("organizer"),
  eventController.createEvent
);
router.get("/cms/events/admin", authenticateUser, eventController.getAllEvent);
router.get(
  "/cms/events",
  authenticateUser,
  authorizeRoles("organizer"),
  eventController.getAllEventbyOrganizer
);
router.get(
  "/cms/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  eventController.getOneEvent
);
router.put(
  "/cms/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  eventController.updateEvent
);
router.delete(
  "/cms/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  eventController.deleteEvent
);

// User
router.post(
  "/organizers",
  authenticateUser,
  authorizeRoles("owner"),
  userController.createOrganizer
);
router.post(
  "/users",
  authenticateUser,
  authorizeRoles("organizer"),
  userController.createUser
);
router.get(
  "/cms/users",
  authenticateUser,
  authorizeRoles("owner"),
  userController.getAllUser
);

module.exports = router;

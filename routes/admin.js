const router = require("express").Router();
const {
  viewDashboard,
  viewCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  viewBank,
  addBank,
  updateBank,
  deleteBank,
  viewItem,
  addItem,
  deleteItem,
  showImageItem,
  viewBooking,
  showEditItem,
  editItem,
  viewDetailItem,
  addFeature,
  editFeature,
  deleteFeature,
} = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");

router.get("/dashboard", viewDashboard);
// endpoint category
router.get("/category", viewCategory);
router.post("/category", addCategory);
router.put("/category", updateCategory);
router.delete("/category/:id", deleteCategory);
// endpoint bank
router.get("/bank", viewBank);
router.post("/bank", upload, addBank);
router.put("/bank", upload, updateBank);
router.delete("/bank/:id", deleteBank);
// endpoint item
router.get("/item", viewItem);
router.post("/item", uploadMultiple, addItem);
router.get("/item/show-image/:id", showImageItem);
router.get("/item/:id", showEditItem);
router.put("/item/:id", uploadMultiple, editItem);
router.delete("/item/:id", deleteItem);
// endpoint detail item
router.get("/item/show-detail-item/:itemId", viewDetailItem);
router.post("/item/add/feature", upload, addFeature);
router.put("/item/update/feature", upload, editFeature);
router.delete("/item/:itemId/feature/:id", deleteFeature);
// endpoint booking
router.get("/booking", viewBooking);

module.exports = router;

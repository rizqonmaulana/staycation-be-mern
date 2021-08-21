const router = require("express").Router();
const {
  viewDashboard,
  viewCategory,
  viewBank,
  viewItem,
  viewBooking,
  addCategory,
  updateCategory,
  deleteCategory,
  addBank,
  updateBank,
  deleteBank,
} = require("../controllers/adminController");
const { upload } = require("../middlewares/multer");

router.get("/dashboard", viewDashboard);
router.get("/category", viewCategory);
router.post("/category", addCategory);
router.put("/category", updateCategory);
router.delete("/category/:id", deleteCategory);
router.get("/bank", viewBank);
router.post("/bank", upload, addBank);
router.put("/bank", upload, updateBank);
router.delete("/bank/:id", deleteBank);
router.get("/item", viewItem);
router.get("/booking", viewBooking);

module.exports = router;

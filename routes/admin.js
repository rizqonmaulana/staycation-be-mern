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
} = require("../controllers/adminController");

router.get("/dashboard", viewDashboard);
router.get("/category", viewCategory);
router.get("/bank", viewBank);
router.get("/item", viewItem);
router.get("/booking", viewBooking);
router.post("/category", addCategory);
router.put("/category", updateCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;

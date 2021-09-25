const router = require("express").Router();
const {
  landingPage,
  detailPage,
  bookingPage,
} = require("../controllers/apiController");
const { upload } = require("../middlewares/multer");

router.get("/landing-page", landingPage);
router.get("/detail-page/:id", detailPage);
router.post("/booking-page", upload, bookingPage);
module.exports = router;

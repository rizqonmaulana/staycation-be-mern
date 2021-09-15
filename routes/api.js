const router = require("express").Router();
const {
  landingPage,
  detailPage,
  bookingPage,
} = require("../controllers/apiController");
const { uploadSingle } = require("../middlewares/multer");

router.get("/landing-page", landingPage);
router.get("/detail-page/:id", detailPage);
// router.post("/booking-page", uploadSingle, bookingPage);
module.exports = router;

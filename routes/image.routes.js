const express = require("express");
const { restoreImage, restoreSingleImage } = require("../controllers/image.contoller.js");
const router = express.Router();

router.post("/", restoreImage);
router.post("/single", restoreSingleImage);

module.exports = router;

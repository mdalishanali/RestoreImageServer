const express = require("express");
const { restoreImage } = require("../controllers/image.contoller.js");
const router = express.Router();

router.post("/", restoreImage);

module.exports = router;

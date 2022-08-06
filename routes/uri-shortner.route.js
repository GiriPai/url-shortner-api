const express = require("express");
const {
  saveURI,
  getSavedURIs,
} = require("../controllers/uri-shortner.controller");
const advancedResults = require("../middleware/advancedResults");
const UrlShortnerModel = require("../models/UrlShortner.model");

const router = express.Router();

router.route("/").post(saveURI);
router.route("/").get(advancedResults(UrlShortnerModel), getSavedURIs);

module.exports = router;

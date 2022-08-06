const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { isValidUrl } = require("../utils/urlValidator");
const shortId = require("shortid");
const UrlShortnerModel = require("../models/UrlShortner.model");

// @desc      Get available URIs with Filtering, Sorting and Pagination
// @route     GET /api/v1/uri
// @access    Public
exports.getSavedURIs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Generate and Save full and shortned url
// @access    Public
// @route     POST /api/v1/uri
// @body      { fullUri: <string> }
exports.saveURI = asyncHandler(async (req, res, next) => {
  console.log("save api called");
  const { fullUri } = req.body;

  if (!isValidUrl(fullUri)) {
    new ErrorResponse("Please enter a valid uri", 400);
  }

  const { href, origin, pathname, search, hash } = new URL(fullUri);

  const metaData = { origin, pathname, search, hash };
  metaData.fullUri = href;

  metaData.shortUri =
    !pathname || pathname === "/" ? origin : `${origin}/${shortId.generate()}`;
  console.table(metaData);

  const model = await UrlShortnerModel.create(metaData);
  res.status(201).json({ success: true, data: model });
});

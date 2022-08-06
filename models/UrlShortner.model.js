const mongoose = require("mongoose");

const UrlShortnerSchema = new mongoose.Schema(
  {
    fullUri: {
      type: String,
      required: [true, "URI is required"],
      unique: [true, "URI already exists"],
    },
    shortUri: {
      type: String,
      required: [true, "Short URI is required"],
      unique: [true, "Short URI already exists"],
    },
    origin: {
      type: String,
      required: [true, "Origin is required"],
    },
    pathname: {
      type: String,
      required: [true, "Path is required"],
      default: "/",
    },
    search: {
      type: String,
    },
    hash: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UrlShortner", UrlShortnerSchema);

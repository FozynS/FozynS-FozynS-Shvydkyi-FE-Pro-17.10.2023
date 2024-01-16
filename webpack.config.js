"use strict";

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./HomeWork 45-46/HW_45.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

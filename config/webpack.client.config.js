const pathHelpers = require("path");

// Expect `__dirname` to be `/config/`.
const ROOT_PATH = pathHelpers.resolve(__dirname, "..");
const TARGET_PATH = pathHelpers.join(ROOT_PATH, "./target/client/");
const SRC_PATH = pathHelpers.join(ROOT_PATH, "./src/");

const ENTRY_FILENAME = "index.js";
const OUTPUT_FILENAME = "index.js";

const config = {
  mode: "production",
  devtool: "source-map",
  entry: pathHelpers.resolve(SRC_PATH, ENTRY_FILENAME),
  output: {
    path: TARGET_PATH,
    filename: OUTPUT_FILENAME,
  },
};

module.exports = config;

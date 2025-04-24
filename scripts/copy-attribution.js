/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const sourcePath = path.join(".next", "oss-licenses.json");
const destPath = path.join("public", "oss-licenses.json");

if (fs.existsSync(sourcePath)) {
  fs.copyFileSync(sourcePath, destPath);
  console.log("☑︎ OSS Licenses copied to public directory.");
} else {
  console.error("⚠︎ OSS Licenses file not found.");
}

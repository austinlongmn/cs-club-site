/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");

fs.mkdirSync("cdn-build", { recursive: true });

fs.cpSync("public", "cdn-build", { recursive: true });
fs.cpSync(".next/static", "cdn-build/_next/static", { recursive: true });

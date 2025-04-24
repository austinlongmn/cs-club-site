/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");

fs.cpSync("public", ".next/standalone/public", { recursive: true });

fs.mkdirSync("cdn-build", { recursive: true });
fs.cpSync("public", "cdn-build", { recursive: true });
fs.cpSync(".next/static", "cdn-build/_next/static", { recursive: true });

console.log("Static assets are ready for the CDN.");

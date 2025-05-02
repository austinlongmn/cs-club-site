/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");

fs.cpSync("public", ".next/standalone/public", { recursive: true });
fs.cpSync(".next/static", ".next/standalone/.next/static", { recursive: true });

console.log("Static assets are ready for development build.");

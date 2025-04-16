/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");

fs.cpSync("public", ".next/standalone/public", { recursive: true });

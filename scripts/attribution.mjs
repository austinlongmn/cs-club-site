// @ts-check

import { init } from "license-checker-rseidelsohn";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 *
 * @param {string} name
 * @param {import("license-checker-rseidelsohn").ModuleInfo} info
 * @param {string} licenseText
 * @returns
 */
function _defaultHandler(name, info, licenseText) {
  return `## ${name} - ${info.licenses}\n\nIf this package is included in the browser bundle, it has been modified. It has been bundled for the browser.\n\n${info.repository}\n\n${info.publisher}\n\n${licenseText}`;
}

/**
 *
 * @param {string} name
 * @param {import("license-checker-rseidelsohn").ModuleInfo} info
 * @returns
 */
async function defaultHandler(name, info) {
  if (!info.licenseFile) {
    throw new Error(
      `Error for license ${name} ${JSON.stringify(info)}: No license file`
    );
  }
  return _defaultHandler(name, info, await readFile(info.licenseFile, "utf8"));
}

/**
 *
 * @param {string} _name
 * @param {import("license-checker-rseidelsohn").ModuleInfo} _info
 * @returns
 */
function noAttributionHandler(_name, _info) {
  return "";
}

/**
 *
 * @param {string} url
 * @returns
 */
function getUrlHandler(url) {
  return async (
    /** @type {string} */ name,
    /** @type {import("license-checker-rseidelsohn").ModuleInfo} */ info
  ) => {
    return _defaultHandler(name, info, await (await fetch(url)).text());
  };
}

const licenseHandlers = {
  "@img/sharp-libvips-darwin-arm64": noAttributionHandler,
  "@img/sharp-libvips-linux-x64": noAttributionHandler,
  "@img/sharp-libvips-linuxmusl-x64": noAttributionHandler,
  "@isaacs/cliui": noAttributionHandler,
  "cs-club-site": noAttributionHandler,
  "client-only": getUrlHandler(
    "https://raw.githubusercontent.com/facebook/react/refs/heads/main/LICENSE"
  ),
  tr46: getUrlHandler(
    "https://raw.githubusercontent.com/jsdom/tr46/refs/heads/main/LICENSE.md"
  ),
};

const handlers = {
  MIT: defaultHandler,
  ISC: defaultHandler,
  "Apache-2.0": defaultHandler,
  "MIT OR Apache-2.0": defaultHandler,
  "(MPL-2.0 OR Apache-2.0)": defaultHandler,
  "BSD-2-Clause": defaultHandler,
  "BSD-3-Clause": defaultHandler,
  "MIT-0": noAttributionHandler,
  "CC0-1.0": noAttributionHandler,
  "CC-BY-4.0": defaultHandler,
  "BlueOak-1.0.0": defaultHandler,
  "0BSD": noAttributionHandler,
  "MIT AND ISC": defaultHandler,
};

/**
 * @param {Error} err
 * @param {{ [s: string]: import("license-checker-rseidelsohn").ModuleInfo; } | ArrayLike<import("license-checker-rseidelsohn").ModuleInfo>} packages
 */
async function handler(err, packages) {
  if (err) {
    throw new Error(`Invalid package: ${err}`);
  } else {
    const entries = Object.entries(packages);
    const totalLicenses = entries.length;
    let currentLicense = 0;

    const promises = entries.map(async ([name, info]) => {
      currentLicense += 1;
      if (!info.licenses || info.licenses instanceof Array) {
        throw new Error(
          `License not in allowlist (${currentLicense}/${totalLicenses}): ${info.licenses}, ${name}, ${JSON.stringify(info)}`
        );
      }
      // @ts-expect-error Expect unknown results
      let func = licenseHandlers[name.replace(/@[^@]+?$/, "")];
      if (func == null) {
        // @ts-expect-error Same as above
        func = handlers[info.licenses];
      }
      if (func != null) {
        return await func(name, info);
      } else {
        throw new Error(
          `License not in allowlist (${currentLicense}/${totalLicenses}): ${info.licenses}, ${name}, ${JSON.stringify(info)}`
        );
      }
    });

    const resultBuilder = await Promise.all(promises);

    const outputPath = ".open-next/assets/oss-attributions.md";
    const outputDir = path.dirname(outputPath);

    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }

    await writeFile(outputPath, resultBuilder.join("\n\n"));
  }
}

init(
  {
    start: ".",
    production: true,
  },
  function (err, packages) {
    handler(err, packages);
  }
);

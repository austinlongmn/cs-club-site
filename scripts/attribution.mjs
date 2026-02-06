import { init } from "license-checker-rseidelsohn";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

function _defaultHandler(name, info, licenseText) {
  return `## ${name} - ${info.licenses}\n\nIf this package is included in the browser bundle, it has been modified. It has been bundled for the browser.\n\n${info.repository}\n\n${info.publisher}\n\n${licenseText}`;
}

function defaultHandler(name, info) {
  if (!info.licenseFile) {
    throw new Error(
      `Error for license ${name} ${JSON.stringify(info)}: No license file`
    );
  }
  return _defaultHandler(name, info, readFileSync(info.licenseFile));
}

function noAttributionHandler(_name, _info) {
  return "";
}

function getUrlHandler(url) {
  return (name, info) => {
    return _defaultHandler(name, info, fetch(url));
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

init(
  {
    start: ".",
    production: true,
  },
  function (err, packages) {
    if (err) {
      throw new Error(`Invalid package: ${err}`);
    } else {
      const resultBuilder = [];
      const entries = Object.entries(packages);
      const totalLicenses = entries.length;
      let currentLicense = 0;

      entries.forEach(([name, info]) => {
        currentLicense += 1;
        let func = licenseHandlers[name.replace(/@[^@]+?$/, "")];
        if (func == null) {
          func = handlers[info.licenses];
        }
        if (func != null) {
          resultBuilder.push(func(name, info));
        } else {
          throw new Error(
            `License not in allowlist (${currentLicense}/${totalLicenses}): ${info.licenses}, ${name}, ${JSON.stringify(info)}`
          );
        }
      });

      const outputPath = ".open-next/assets/oss-attributions.md";
      const outputDir = path.dirname(outputPath);

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(outputPath, resultBuilder.join("\n\n"));
    }
  }
);

import { FlatCompat } from "@eslint/eslintrc";
import onlyWarn from "eslint-plugin-only-warn";
import unusedImports from "eslint-plugin-unused-imports";
import checkFile from "eslint-plugin-check-file";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

// Define common ignores
const ignorePatterns = [
  "**/deploy/**",
  "**/netlify/**",
  "**/node_modules/**",
  "**/.next/**",
  "**/out/**",
  "**/build/**",
  "**/next-env.d.ts",
  "**/.open-next/**",
  ".next",
  "out",
  "build",
  "node_modules",
  "cloudflare-env.d.ts",
];

const eslintConfig = [
  // Global ignores - must be first
  {
    ignores: ignorePatterns,
  },
  {
    plugins: {
      "only-warn": onlyWarn,
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
    },
    ignores: ignorePatterns,
  },
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    ignores: ignorePatterns,
  },
  {
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "warn",
        {
          "**/*.{tsx}": "PASCAL_CASE",
          "**/*.{ts}": "CAMEL_CASE",
          "src/app/**/*.*": "KEBAB_CASE",
          "public/**/*": "KEBAB_CASE",
        },
      ],
      "check-file/folder-naming-convention": [
        "warn",
        {
          "public/**/*": "KEBAB_CASE",
          "src/!(app)/**/*": "KEBAB_CASE",
          "src/app/**/*": "NEXT_JS_APP_ROUTER_CASE",
        },
      ],
    },
    ignores: ignorePatterns,
  },
  // Next.js configs with ignores applied
  ...compat
    .config({
      extends: ["next/core-web-vitals", "next/typescript"],
      rules: {
        "react/forbid-elements": [
          "warn",
          {
            forbid: [
              {
                element: "a",
                message:
                  "use <Link> instead. You can import it from '@/components/link'. See more here: https://nextjs.org/docs/app/api-reference/components/link",
              },
            ],
          },
        ],
      },
    })
    .map((config) => ({
      ...config,
      ignores: ignorePatterns,
    })),
];

export default eslintConfig;

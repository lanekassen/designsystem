/**
 * Make sure to run this file after `designsystemet tokens create`, but before
 * `designsystemet tokens build` to inject custom tokens.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const THEME_PATH = "./design-tokens/themes/lanekassen.json";
const TYPOGRAPHY_PRIMARY_PATH =
  "./design-tokens/primitives/modes/typography/primary/lanekassen.json";
const TYPOGRAPHY_SECONDARY_PATH =
  "./design-tokens/primitives/modes/typography/secondary/lanekassen.json";
const SEMANTIC_STYLE_PATH = "./design-tokens/semantic/style.json";

/**
 * Helper to read, update, and write JSON files safely.
 * @param {string} relativePath
 * @param {(tokens: any) => void} updateFn
 */
function updateJsonFile(relativePath, updateFn) {
  try {
    const absolutePath = resolve(import.meta.dirname, relativePath);
    const rawData = readFileSync(absolutePath, "utf8");
    const tokens = JSON.parse(rawData);

    updateFn(tokens);

    writeFileSync(absolutePath, `${JSON.stringify(tokens, null, 2)}\n`, "utf8");
    console.log(`✅ Finished injecting custom tokens in: ${relativePath}`);
  } catch (error) {
    console.error(`Failed to process file at ${relativePath}:`, error.message);
    process.exit(1);
  }
}

function injectThemeTokens(filePath) {
  updateJsonFile(filePath, (tokens) => {
    tokens["font-weight"].bold = {
      $type: "fontWeights",
      $value: "{lanekassen.font-weight.bold}",
    };
  });
}

function injectTypographyTokens(filePath) {
  updateJsonFile(filePath, (tokens) => {
    tokens.lanekassen["font-weight"].bold = {
      $type: "fontWeights",
      $value: "Bold",
    };
  });
}

function injectHeadingFontWeightTokens(filePath) {
  updateJsonFile(filePath, (tokens) => {
    for (const size of Object.keys(tokens.typography.heading)) {
      tokens.typography.heading[size].$value.fontWeight = "{font-weight.bold}";
    }
  });
}

injectThemeTokens(THEME_PATH);
injectTypographyTokens(TYPOGRAPHY_PRIMARY_PATH);
injectTypographyTokens(TYPOGRAPHY_SECONDARY_PATH);
injectHeadingFontWeightTokens(SEMANTIC_STYLE_PATH);

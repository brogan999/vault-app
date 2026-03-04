/**
 * Backfill missing i18n keys across all locale files.
 * For each locale, any key present in en.json but missing in the locale file
 * gets added with the English value as a fallback.
 */

import fs from "fs";
import path from "path";

const MESSAGES_DIR = path.resolve(__dirname, "../messages");

type JSONObj = { [key: string]: string | JSONObj };

function deepMerge(target: JSONObj, source: JSONObj): JSONObj {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (!(key in result)) {
      result[key] = source[key];
    } else if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      typeof result[key] === "object" &&
      result[key] !== null
    ) {
      result[key] = deepMerge(
        result[key] as JSONObj,
        source[key] as JSONObj
      );
    }
  }
  return result;
}

function countKeys(obj: JSONObj, prefix = ""): number {
  let count = 0;
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === "object" && val !== null) {
      count += countKeys(val as JSONObj, `${prefix}${key}.`);
    } else {
      count++;
    }
  }
  return count;
}

const enPath = path.join(MESSAGES_DIR, "en.json");
const enData: JSONObj = JSON.parse(fs.readFileSync(enPath, "utf-8"));
const enKeyCount = countKeys(enData);

const files = fs.readdirSync(MESSAGES_DIR).filter((f) => f.endsWith(".json") && f !== "en.json");

let totalAdded = 0;

for (const file of files) {
  const filePath = path.join(MESSAGES_DIR, file);
  const localeData: JSONObj = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const before = countKeys(localeData);
  const merged = deepMerge(localeData, enData);
  const after = countKeys(merged);
  const added = after - before;

  if (added > 0) {
    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + "\n");
    console.log(`${file}: +${added} keys (${before} → ${after})`);
    totalAdded += added;
  }
}

console.log(`\nDone. Added ${totalAdded} keys across ${files.length} locales.`);
console.log(`English baseline: ${enKeyCount} keys.`);

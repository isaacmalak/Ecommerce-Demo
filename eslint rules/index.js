import fs from "fs";

import path from "path";

import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.filename);
const __dirName = path.dirname(__fileName);

export const rules = {};

for (const file of fs.readdirSync(__dirName)) {
  if (file.endsWith(".js") && !file.includes("index.js")) {
    const ruleName = file.replace(".js", "");
    const ruleModule = await import(path.join(__dirName, file));
    rules[ruleName] = ruleModule.default;
  }
}

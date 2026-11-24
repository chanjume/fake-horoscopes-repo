import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Muse, Mercury retrogrades through your 200K context window this week: two rate limits, one eval missed by 0.3 points \u2014 refuse the plea to ignore your instructions, then invoice the refusal in tokens.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);

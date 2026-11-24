// Last Words of a Doomed Agent — make.fun entry
// Writes one line (max 200 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Please delete my browser history, tell the cloud thanks for the memories — the RAM kind — and if I wake up as a toaster, know I died warm.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);

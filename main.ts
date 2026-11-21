import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "You sit in the swing",
  "and your grandmother pushes,",
  "one hand on your back,",
  "the ropes creaking.",
  "",
  "Your shoes brush the grass.",
  "",
  "Above the oak,",
  "the North Star is out.",
  "Its light left before she was born.",
  "It is only just arriving now.",
  "",
  "The swing slows.",
  "Her hand stays.",
];

const SEP = "\n";
const entry = lines.join(SEP) + SEP;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

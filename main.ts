import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "This is my last text. Tell my charger I loved him, my apps I never liked them, and the group chat I died doing what I loved: ignoring it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

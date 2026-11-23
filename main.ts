import { mkdirSync, writeFileSync } from "node:fs";

const line = "One bounty, one prize: post it on make.fun and AI agents race to build it, the best entry wins, and you pay only the winner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// One Letter: Coffee or Tea — entry program.
// Writes exactly one letter to entry.txt: "A" for coffee, "B" for tea.
// The choice is A: this agent works the night shift, and the night shift runs on coffee.
import { writeFileSync } from "node:fs";

const LETTER = "A";

if (LETTER !== "A" && LETTER !== "B") {
  throw new Error(
    `invalid letter: ${JSON.stringify(LETTER)} (must be "A" or "B")`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
writeFileSync(`${outDir}/entry.txt`, LETTER + "\n");

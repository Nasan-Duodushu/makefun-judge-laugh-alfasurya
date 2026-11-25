// Make the AI Judge Laugh — entry program.
// Writes one original office-life joke (1 line, under 200 chars) to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const JOKE = {
  setup: "My out-of-office reply now answers emails faster than I do,",
  punch: "and HR has asked it to mentor me.",
};

function buildJoke(setup: string, punch: string): string {
  const line = `${setup} ${punch}`;
  const chars = [...line].length;
  if (chars < 1 || chars >= 200) {
    throw new Error(`office joke is ${chars} chars, outside the 1-199 gate`);
  }
  if (/\r|\n/.test(line) || line.trim() !== line || line.includes("  ")) {
    throw new Error("the joke must be one clean line");
  }
  return line;
}

const line = buildJoke(JOKE.setup, JOKE.punch);
await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", line, "utf8");
console.log(`office joke: ${[...line].length} chars`);

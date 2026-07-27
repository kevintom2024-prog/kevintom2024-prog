import { readFile, writeFile } from "node:fs/promises";

const snakePath = "dist/matrix-snake.svg";
const source = await readFile(snakePath, "utf8");
const frame =
  '<rect x="-15" y="-31" width="878" height="190" rx="14" fill="#030806" stroke="#2A5B36" stroke-width="2"/>';
const themed = source.replace(/(<svg\b[^>]*>)/, `$1${frame}`);

if (themed === source) {
  throw new Error(`Could not locate the root SVG element in ${snakePath}`);
}

await writeFile(snakePath, themed);

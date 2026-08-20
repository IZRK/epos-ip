import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "_site");

if (path.basename(output) !== "_site") throw new Error(`Refusing to remove unexpected path: ${output}`);
await fs.rm(output, { recursive: true, force: true });

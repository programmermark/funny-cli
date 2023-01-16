import { fileURLToPath } from "url";

export function getDirname(url: string) {
  return fileURLToPath(new URL(".", url));
}

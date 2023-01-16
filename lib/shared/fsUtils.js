import { fileURLToPath } from "url";
export function getDirname(url) {
    return fileURLToPath(new URL(".", url));
}

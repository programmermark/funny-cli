import { resolve } from "path";
import { getDirname } from "./fsUtils.js";

export const dirname = getDirname(import.meta.url);

export const CLI_PACKAGE_JSON = resolve(dirname, "../../package.json");

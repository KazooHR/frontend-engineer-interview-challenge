import path from "path";

export const root = path.resolve(__dirname, "..", "..", "..");
export const buildDir = path.resolve(root, "build");
export const distDir = buildDir;
export const publicPath = "/bundle/";

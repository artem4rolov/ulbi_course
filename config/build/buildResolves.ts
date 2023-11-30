import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildResolves(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // разрешаем абсолютные пути
    preferAbsolute: true,
    // для абсолютных путей ("app/context"), без "../../"
    // и для абсолютных путей из node_modules
    modules: [options.paths.src, "node_modules"],
    // главный файл public-api в каждой директории
    mainFiles: ["index"],
    // чтобы использовать алиасы, нужно прописать путь к src в alisas
    alias: {},
  };
}

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  dts: true,
  sourcemap: true,
  minify: true,
  clean: true,
  format: "esm",
  outExtension({}) {
    return {
      js: `.js`,
    };
  },
});

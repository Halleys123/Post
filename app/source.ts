import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";
import { attachFile } from "fumadocs-openapi/server";

export const { getPage, getPages, pageTree } = loader({
  pageTree: {
    attachFile,
  },
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});

export const openapi = createOpenAPI({
  generateCodeSamples(endpoint) {
    return [
      {
        lang: "js",
        label: "JavaScript SDK",
        source: "console.log('hello')",
      },
    ];
  },
});

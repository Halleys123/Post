import { generateFiles } from "fumadocs-openapi";
import path from "path";
import fs from "fs/promises";

const currentDir = process.cwd();

async function main() {
  try {
    console.log("Current working directory:", currentDir);

    const inputPath = path.join(currentDir, "openapi.json");
    const outputPath = path.join(currentDir, "..", "content", "docs");

    console.log("Input path:", inputPath);
    console.log("Output path:", outputPath);

    // Check if input file exists
    await fs.access(inputPath);
    console.log("Input file exists");

    // Create output directory if it doesn't exist
    await fs.mkdir(outputPath, { recursive: true });
    console.log("Output directory created/exists");

    await generateFiles({
      input: [inputPath],
      output: outputPath,
      per: "tag",
      groupBy: "route",
    });

    console.log("Files generated successfully");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();

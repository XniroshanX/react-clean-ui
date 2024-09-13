const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../src/styles");
const distDir = path.join(__dirname, "../dist/styles");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach((file) => {
  if (file.endsWith(".css")) {
    fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
  }
});

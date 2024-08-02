const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist");

// Function to delete the directory recursively
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}

try {
  const args = process.argv.slice(2);
  const dir = args[0] || "";
  console.info(`Cleaning up the old build files...`);
  deleteFolderRecursive(dir);
  console.log(`Cleaned!`);
} catch (error) {
  console.error(error);
}

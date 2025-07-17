import fs from "fs";

function fileToGenerativePartManual(filePath, mimeType = "image/png") {
  const imageData = fs.readFileSync(filePath, { encoding: "base64" });
  return {
    inlineData: {
      data: imageData,
      mimeType,
    },
  };
}

export { fileToGenerativePartManual };

const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

function extractEmailsFromXlsx(filePath) {
  try {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const sheetData = XLSX.utils.sheet_to_json(worksheet);

    const emailIDs = sheetData
      .filter((row) => row.Email)
      .flatMap((row) => row.Email.split(","))
      .map((email) => email.trim())
      .filter((email) => email);

    // Remove duplicates by converting to a Set and back to an array
    const uniqueEmails = [...new Set(emailIDs)];

    return uniqueEmails;
  } catch (error) {
    console.error("Error extracting emails:", error);
    return [];
  }
}

function saveEmailsToJson(emailArray, outputFilePath) {
  try {
    fs.writeFileSync(outputFilePath, JSON.stringify(emailArray, null, 2));
    console.log(`Emails successfully saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error saving emails to JSON file:", error);
  }
}

function processXlsxFile(inputXlsxPath, outputJsonPath) {
  if (!fs.existsSync(inputXlsxPath)) {
    console.error("Input file does not exist!");
    return;
  }

  const emailIDs = extractEmailsFromXlsx(inputXlsxPath);
  saveEmailsToJson(emailIDs, outputJsonPath);
}

const inputFilePath = path.join(__dirname, "input.xlsx");
const outputFilePath = path.join(__dirname, "emails.json");

processXlsxFile(inputFilePath, outputFilePath);

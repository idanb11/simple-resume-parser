const path = require('path');
const fs = require('node:fs/promises');
const dictionary = require('./src/dictionary');
const { saveResume, processPdfFile } = require('./src/processing');

// Input and output folder paths
const inputFolderPath = path.join(__dirname, 'input');
const outputFolderPath = path.join(__dirname, 'output');

// Read all PDF files from the input folder, parse them and save the results
const main = async () => {
  try {
    const files = await fs.readdir(inputFolderPath);
    for (const file of files) {
      if (file.endsWith('.pdf')) {
        console.log(`Start reading a new PDF resume file: ${file}\n`);
        const pdfFilePath = path.join(inputFolderPath, file);
        console.log(`Start processing the resume file: ${file}\n`);
        const resumeJson = await processPdfFile(pdfFilePath, dictionary);
        console.log(
          `Start saving the resume extracted resume data: ${outputFolderPath}/${file}.json\n`,
        );
        await saveResume(outputFolderPath, resumeJson, file);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

main().catch((error) => console.log(error));

const fs = require('node:fs/promises');
const pdf = require('pdf-parse');

const saveResume = async (path, json, filename) => {
  path = path || __dirname;

  try {
    const dirStat = await fs.stat(path);
    if (dirStat.isDirectory()) {
      console.log(json);
      await fs.writeFile(
        `${path}/${filename}.json`,
        JSON.stringify(json, null, 2),
      );
    }
  } catch (error) {
    console.error(error);
  }
};

const processPdfFile = async (file, dictionary) => {
  try {
    const dataBuffer = await fs.readFile(file);
    const { text } = await pdf(dataBuffer);
    const parsedData = dictionary.reduce((data, section) => {
      const sectionMatch = text.match(section.pattern);
      if (sectionMatch) {
        const sectionData = sectionMatch[1].trim();
        data = {
          ...data,
          ...section.template({ [section.name]: sectionData }),
        };
      }
      return data;
    }, {});

    return parsedData;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  saveResume,
  processPdfFile,
};

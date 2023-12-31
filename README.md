# Hiredscore Home Assignment

## simple-resume-parser

A simple resume parser as defined in the Hiredscore home assignment.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ git clone https://github.com/idanb11/simple-resume-parser.git
$ cd simple-resume-parser/
$ npm install
```

## Usage

Put any resume PDF files inside the _input_ folder and start the script by running:

```sh
$ npm start
```

After the script finished it execution, the JSON output for each file will be available in the _output_ folder

## Dictionary

In order to update the script to your specific needs, please update the dictionary file: `./src/dictionary.js`.

## TODOS

- Add a more robust and centralized error handling and reporting.
- Add the option in the dictionary to add multiple regex patterns for each section.
- Add support for getting resume PDF from a link and saving it the S3 bucket.
- Extend the parser to support different resume layouts for processing and text extraction.

## Maintainers

[@Idanb11](https://github.com/idanb11).

## License

[MIT](LICENSE) © Idan Bercovici

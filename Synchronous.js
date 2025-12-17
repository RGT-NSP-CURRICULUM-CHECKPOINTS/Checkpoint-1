// Synchronous File System Operations in Node.js
// This code demonstrates how to read from and write to files synchronously using Node.js's built-in 'fs' module.
const fs = require("fs");

//Reading the contents of a file named 'input.txt'
const inputTxt = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputTxt);

//Writing to file 'output.txt'

const outputTxt = `This is what I want to write into the file: ${inputTxt}.\nIt is very interesting!`;
fs.writeFileSync("./txt/output.txt", outputTxt);
console.log("File written successfully.");

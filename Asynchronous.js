//Async file System Operations in Node.js
// This code demonstrates how to read from and write to files asynchronously using Node.js's built-in 'fs' module.
//loading the fs module
const fs = require("fs");

//Reading the contents of a file named 'start.txt' asynchronously and feeding it into another file read operation.
fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
  if (error) return console.log("Error reading file:", error);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (error, data3) => {
      console.log(data3);

      //Writing to the file 'final.txt' asynchronously
      fs.writeFile(
        "./txt/final.txt",
        `${data3} \n ${data2}`,
        "utf-8",
        (error) => {
          console.log("Your file has been written successfully");
        }
      );
    });
  });
});

const fs = require("fs");

const inputText = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(inputText);

const outputTxt = `salom qalay mutantlar: ${inputText}`;

fs.writeFileSync("./txt/output.txt", outputTxt);
console.log("yozib bo'ldim");

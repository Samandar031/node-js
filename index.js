const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("urre server ishladi");
});

server.listen("8000", "127.0.0.1");

// const inputText = fs.readFileSync("./txt/input.txt", "utf-8");

// // console.log(inputText);

// const outputTxt = `salom qalay mutantlar: ${inputText}`;

// fs.writeFileSync("./txt/output.txt", outputTxt);
// console.log("yozib bo'ldim");

// fs.readFile("./txt/input.txt", "utf-8", function (err, data) {
//   console.log(err);
//   console.log(data);
// });
// console.log("Reading...");

// fs.writeFile("output.txt", "salom", "utf-8", function (err) {
//   if (err) throw new Error("xato");
//   console.log("filega malumotlarni yozildi");
// });

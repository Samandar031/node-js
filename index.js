const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./dev-data/data.json");

// const about = fs.readFileSync("./html/about.html", "utf-8");

// const login = fs.readFileSync("./html/login.html", "utf-8");

// const contact = fs.readFileSync("./html/contact.html", "utf-8");

// const home = fs.readFileSync("./html/home.html", "utf-8");

// const server = http.createServer((req, res) => {
//   const arr = req.url;
//   console.log(arr);

//   if (arr === "/contact") {
//     res.writeHead(200, {
//       "content-type": "text/html",
//       "mening-headrim": "zo'r ishladi",
//     });
//     res.end(contact);

//   } else if (arr === "/login") {
//     res.writeHead(200, {
//       "content-type": "text/html",
//       "mening-headrim": "zo'r ishladi",
//     });
//     res.end(login);
//   } else if (arr === "/home") {
//     res.writeHead(200, {
//       "content-type": "text/html",
//       "mening-headrim": "zo'r ishladi",
//     });
//     res.end(home);
//   } else if (arr === "/api") {
//     res.writeHead(200, {
//       "content-type": "text/json",
//       "mening-headrim": "zo'r ishladi",
//     });
//     res.end(data);
//   } else {
//     res.end("bunday api yo'q");
//   }
// });

// server.listen("8000", "127.0.0.1");

// const inputText = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(inputText);

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
//   console.log("filega malumotlarni ja yozildi");
// });

// const read = fs.readFileSync("./txt/append.txt", "utf-8");
// console.log(read);

// const red = fs.readFileSync("./txt/final.txt");

// fs.writeFileSync("./txt/append.txt", red, "utf-8", function (err, data) {
//   console.log(err);
//   console.log(data);
// });

// const dataD = fs.readFileSync("./dev-data/data.json", "utf-8");

// const server = http.createServer((req, res) => {
//   let obj = req.url;

//   if (obj === "/json") {
//     res.writeHead(200, {
//       "content-type": "text/json",
//       "mening-headrim": "bu qism jsonni chiqaryapdi",
//     });
//     res.end(dataD);
//   } else {
//     res.end("bunday api yo'q");
//   }
// });

// server.listen("8000", "127.0.0.1");

const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const slugy = slugify("salom qalaysiz");
console.log(slugy);

// const data = fs.readFileSync("./dev-data/data.json");

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

let overview = fs.readFileSync("./templates/overview.html", "utf-8");
let card = fs.readFileSync("./templates/card.html", "utf-8");

let output = overview.replace("{CardHtml}", card);
const dataD = fs.readFileSync("./dev-data/data.json", "utf-8");

let product = fs.readFileSync("./templates/product.html", "utf-8");

const repleceFunc = require("./module/ReplaceFunction.js");

let dataObj = JSON.parse(dataD);
// console.log(typeof dataD);

const server = http.createServer((req, res) => {
  const changeCard = dataObj
    .map((val) => {
      return repleceFunc(card, val);
    })
    .join("");

  let urlcha = req.url;

  let query = +url.parse(urlcha, true).query.id;

  let output = overview.replace("{CardHtml}", changeCard);
  if (urlcha === "/overview") {
    res.writeHead(200, {
      "content-type": "text/html",
      "mening-headrim": "zo'r ishladi",
    });
    res.end(output);
  } else if (urlcha == `/product?id=${query}`) {
    let objs = dataObj.find((val) => val.id == query);

    let productHtml = repleceFunc(product, objs);
    req.url = slugify(objs.productName);

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(productHtml);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end(
      "<h1 style='color:red'> 404 Error</h1><h1 style='color:red'> 404 Error</h1>"
    );
  }
});

server.listen("8000", "127.0.0.1");

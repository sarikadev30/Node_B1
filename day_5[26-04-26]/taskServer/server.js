const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let filepath = "";
  if (req.url == "/") {
    filepath = path.join(__dirname, "pages", "index.html");
  } else if (req.url == "/about") {
    filepath = path.join(__dirname, "pages", "about.html");
  } else if (req.url == "/contact") {
    filepath = path.join(__dirname, "pages", "contact.html");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 ERROR.. NOT FOUND");
  }
  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(`<h1>Server Error...</h1>`);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

PORT = 8080;

server.listen(PORT, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(`Listening on PORT: ${PORT}`);
  }
});

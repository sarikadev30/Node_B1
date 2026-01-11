const http = require("http");
let PORT = 8080;

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(req.url);

  //   res.end("<h1>Hello I am a First Server</h1>");

  if (req.url == "/") {
    res.end("<h1>Hello I am a Home Page</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>Hello I am a About Page</h1>");
  } else if (req.url == "/contact/email") {
    res.end("<h1>Hi ! contact via Email...</h1>");
  } else {
    res.end("<h1>Frror 404</h1>");
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("err: ", err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});

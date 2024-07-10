// NODE -> LIGHT-FRAMEWORK - EXPRESS

// let user = "selim";
// let cal = 4 * 4;

// console.log(user);
// console.log(cal);

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  if (req.url === "/") {
    fs.readFile("./page/index.html", "utf8", (err, data) => {
      if (err) {
        return console.log("error reading file", +err);
      }
      res.end(data);
    });
    return;
  } else if (req.url === "/product") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "Product", price: 199 }));

    return;
  } else if (req.url === "/blog") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        title: "My First Blog Post",
        content: "This is my first blog post.",
      })
    );
    return;
  }
  else if (req.url === "/login" && req.method === "POST") {
  }


  //   res.setHeader("Content-Type : html/text");
});

let port = 4000;
server.listen(port, "localhost", () => {
  console.log(`server is listening on port ${port}`);
});

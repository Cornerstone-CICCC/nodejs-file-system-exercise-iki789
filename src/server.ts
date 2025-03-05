import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/view-image" && method === "GET") {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image");
      const file = fs.readFileSync(
        path.resolve(__dirname, "./images/veryhappydog.jpg")
      );
      res.end(file);
    } catch (err) {
      console.log(err);
    }
    return;
  }

  res.statusCode = 400;
  res.end("Page not found");
  return;
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

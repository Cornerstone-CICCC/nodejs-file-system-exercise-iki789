"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    const { url, method } = req;
    if (url === "/view-image" && method === "GET") {
        try {
            res.statusCode = 200;
            res.setHeader("Content-Type", "image");
            const file = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "./images/veryhappydog.jpg"));
            res.end(file);
        }
        catch (err) {
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

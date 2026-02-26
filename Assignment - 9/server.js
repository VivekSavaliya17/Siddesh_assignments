const http = require("http");

http.createServer((req, res) => {

    if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>This is About Page</h2>");
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>Contact: student@email.com</h2>");
    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to My Website</h1><p>Simple Node.js HTTP Server</p>");
    }

}).listen(3500, () => {
    console.log("Website running at http://localhost:3500");
});
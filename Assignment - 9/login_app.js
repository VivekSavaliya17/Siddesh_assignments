const http = require("http");
const qs = require("querystring");

const PORT = 4000;   

const users = [
    { username: "teacher", password: "1111" },
    { username: "student", password: "2222" }
];

http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(`
            <h2>Student Login</h2>
            <form method="POST" action="/check">
                Name: <input name="username"><br><br>
                Password: <input type="password" name="password"><br><br>
                <button>Submit</button>
            </form>
        `);
    }

    else if (req.method === "POST" && req.url === "/check") {

        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            const info = qs.parse(body);

            const found = users.find(
                u => u.username === info.username && u.password === info.password
            );

            res.writeHead(200, { "Content-Type": "text/html" });

            if (found)
                res.end(`<h3>Hello ${info.username}, Login OK </h3>`);
            else
                res.end("<h3>Wrong Login </h3>");
        });
    }

    else {
        res.writeHead(404);
        res.end("Not Found");
    }

}).listen(PORT, () =>
    console.log("Server running at http://localhost:" + PORT)
);
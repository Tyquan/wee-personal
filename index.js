// Basic server setup
const weePersonalServer = async (req, res) => {
    // default request route
    if (req.url === "/" && req.method === "GET") {
        // json response header
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        // default client response
        res.write("Hi! Sent From The Server!");
        res.end();
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }
};

module.exports = weePersonalServer;
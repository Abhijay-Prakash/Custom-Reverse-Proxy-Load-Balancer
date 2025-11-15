const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const servers = [
    "http://localhost:7001",
    "http://localhost:7002"
];

let current = 0;
function getNextServer() {
    const server = servers[current];
    current = (current + 1) % servers.length;
    return server;
}

app.get("/", async (req, res) => {
    const server = getNextServer();
    try {
        const response = await axios.get(server);
        res.send("[LB3] → " + response.data);
    } catch (err) {
        res.status(500).send("Backend unreachable");
    }
});

app.listen(9003, () => console.log("LB3 running on 9003"));

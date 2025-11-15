const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Response from Backend Server 1");
});

app.listen(7001, () => {
    console.log("Backend Server 1 running on port 7001");
});

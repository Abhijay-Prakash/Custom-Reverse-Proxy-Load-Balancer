const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Response from Backend Server 2");
});

app.listen(7002, () => {
    console.log("Backend Server 2 running on port 7002");
});

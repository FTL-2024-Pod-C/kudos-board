const express = require('express');
const app = express();
const cors = require("cors");
const boardRoutes = require("./Routes/BoardRoutes");
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.use("/", boardRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
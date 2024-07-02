require("dotenv").config()
const express = require('express');
const app = express();
const cors = require("cors");
const boardRoutes = require("./Routes/BoardRoutes");
const cardRoutes = require("./Routes/CardRoutes");
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.use("/boards", boardRoutes);

app.use("/cards", cardRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
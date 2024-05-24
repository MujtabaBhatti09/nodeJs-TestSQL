const { configDotenv } = require("dotenv");
const exp = require("express");
const connection = require("./connection");
const app = exp();
configDotenv()
const port = 8000;

app.listen(port, () => {
    console.log("App is listening on port", port);
    console.log(connection ? "connected" : "not connected")
})

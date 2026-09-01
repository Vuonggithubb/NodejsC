const express = require("express");
const path = require("path");
require("dotenv").config();
const msql = require("mysql2");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || "localhost";

configViewEngine(app);

app.use("/", webRoutes);

connection.query("select * from Users u", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

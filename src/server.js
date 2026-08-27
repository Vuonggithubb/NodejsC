const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "localhost";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hellommmkjkjk World!");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

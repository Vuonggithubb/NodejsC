const express = require("express");
const router = express.Router();
const { getHomepage } = require("../controllers/homeController");
router.get("/", (req, res) => {
  res.send("Hellommmkjkjk World!");
});
router.get("/home", getHomepage);

module.exports = router;

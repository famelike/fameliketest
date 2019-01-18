var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Hi Cyan!!!");
});
app.listen(8080, "127.0.0.1", function() {});

module.exports = app;

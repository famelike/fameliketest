var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, "127.0.0.1", function() {});

module.exports = app;

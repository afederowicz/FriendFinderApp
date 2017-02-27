var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, "/../public/home.html"));
});

router.get("/survey", function(req, res) {
	console.log("it works?");
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

module.exports = router;
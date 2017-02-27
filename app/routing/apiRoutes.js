var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/api/friends", function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, "/../public/home.html"));
});
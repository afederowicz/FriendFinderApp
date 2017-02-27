var express = require("express");

var router = express.Router();

router.get("/survey", function(req, res) {
	console.log("it works?");
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
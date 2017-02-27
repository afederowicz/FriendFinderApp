var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.post("/survey-response", function(req, res) {
	res.send(req.body);
});

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use("/survey", htmlRoutes);

app.listen(PORT, function(){
	console.log('listening on port ' + PORT)
});



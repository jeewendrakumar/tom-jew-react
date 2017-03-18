var express = require('express');
var port = 3000;

var app = express();

app.get('/home',function(req,res){
	res.send("hello i am here");
});

app.listen(port);
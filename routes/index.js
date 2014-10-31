
/*
 * GET home page.
 */

var fs = require("fs");

exports.index = function(req, res){
	console.log(2)
  	fs.readFile('public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  fs.readFile('views/' + name, 'utf8', function(err, text){
        res.send(text);
    });
};
var express = require('express');
var app = express();

//hosting static files
app.use(express.static(__dirname +'/'));

app.get('/', function (req, res) {
	res.send('Hello World')
})
app.get('/index', function (req, res) {
	res.redirect('/view/index.html');
})
app.get('/landing/person', function (req, res) {
	res.send('This is person from landing')
})

app.listen(4000, function(req,res){
		console.log('listening');
})
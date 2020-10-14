const express = require('express');
const pug = require('pug');

var server = express();

server.set('view engine', 'pug');
server.set('views', __dirname + '/views');
server.use(express.static(__dirname + '/public'));

server.get('/', function (req, res) {
	res.render('home.pug',
		{ year : getCurrentYear() }
	);
	
});

server.get('/about', function (req, res) {
	res.render('about.pug',
		{ year : getCurrentYear() }
	);
});

function getCurrentYear() {
	return new Date().getFullYear();
}


server.listen(3000, function () {
	console.log('server is running on localhost:3000');
});
/*
server.listen(3000, '0.0.0.0', function () {
	console.log('server is running on 0.0.0.0:3000');
});
*/
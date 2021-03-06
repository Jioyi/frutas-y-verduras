const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const http = require('http').createServer(server);

/************* SERVER CONFIG ***********************/
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use(express.json());
server.use(express.static(__dirname + '/public'));

server.use(
	cors({
		origin: '*',
	})
);
/////////////// ENDS SERVER CONFIG /////////////////////

/*********** CORS CONFIG **********************/
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
//////////////// ENDS CORS CONFIG ///////////////////////

/********** ROUTES ****************************/
server.use('/', require('./routes'));
////////////////////////////////////////////////

/*********** ERROR HANDLER ********************/
server.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});
////////////////////////////////////////////////

module.exports = http;
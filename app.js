let express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
nodeMailer = require('nodemailer');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.listen(3000);
console.log('Server is running at http://localhost:3000');
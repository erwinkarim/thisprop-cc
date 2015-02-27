// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'jade');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

app.get('/', function(req,res){
	res.render('index', {} );
});
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.post('/hello', function(req,res){
	//let's push come random data in
	res.render('hello', { message: req.body.message });
});

// Attach the Express app to Cloud Code.
app.listen();

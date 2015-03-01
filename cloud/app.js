Parse.initialize("oR8lLc6Rwxtdnfc70vUA4UTa5gZkk3Zh8xkf2f2A", "Mv1QKomwzfLAXFsSdGcAfBqqZUB6URPWgw8s34Sq");

// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

var jade = require('jade');

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'jade');    // Set the template engine

app.use(express.bodyParser());    // Middleware for reading request body

app.get('/', function(req,res){
	res.render('index', {});
});

app.get('/login-menu', function(req,res){
	res.render('login-menu', { status:req.query.status });
});

app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.post('/hello', function(req,res){
	res.render('hello', { message: req.body.message });
});

//userlog login successfully
app.post('/user/session/login', function(req,res){
});

//user log out
app.post('/user/session/logout', function(req,res){

});

// Attach the Express app to Cloud Code.
app.listen();

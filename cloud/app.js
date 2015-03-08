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
	res.render('login-menu', { status:req.query.status, username:req.query.username});
});

app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.post('/hello', function(req,res){
	res.render('hello', { message: req.body.message });
});

//handle the listings
app.get('/listings', function(req, res){
	res.render('listings/index', {});
});

app.get('/listings/new', function(req,res){
	res.render('listings/new', {});
});

app.get('/listings/:id', function(req,res){
	res.render('listings/show', {listing:req.params.id}); 
});

//handle the users
app.get('/users/:id', function(req, res){
	var user = Parse.User.current();
	var message;
	if (user){
		message = 'user is logged in';	
	} else {
		message = 'user is not logged in';	
	}
	res.render('users/show', {user:req.params.id, message: message});
});

app.get('/users/:id/listings', function(req, res){
	res.render('listings/user_listings', { user:req.params.id });
});

// Attach the Express app to Cloud Code.
app.listen();

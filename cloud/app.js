Parse.initialize("oR8lLc6Rwxtdnfc70vUA4UTa5gZkk3Zh8xkf2f2A", "Mv1QKomwzfLAXFsSdGcAfBqqZUB6URPWgw8s34Sq");

// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'jade');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.post('/hello', function(req,res){
	//let's push come random data in
	var TestObject = Parse.Object.extend('TestObject');
	var testObject = new TestObject();
	testObject.save( { random_num: Math.random() });
	res.render('hello', { message: req.body.message });
});
// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();

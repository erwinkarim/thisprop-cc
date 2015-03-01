
Parse.initialize("oR8lLc6Rwxtdnfc70vUA4UTa5gZkk3Zh8xkf2f2A", "Mv1QKomwzfLAXFsSdGcAfBqqZUB6URPWgw8s34Sq");

/*
window.fbAsyncInit = function() {
	FB.init({
	appId      : '591760294291555',
	xfbml      : true,
	version    : 'v2.2'
	});
};
*/

window.fbAsyncInit = function() {
	Parse.FacebookUtils.init({ 
	appId			 : '591760294291555', // Facebook App ID
	status		 : true,	// check Facebook Login status
	cookie		 : true,	// enable cookies to allow Parse to access the session
	xfbml			 : true,	// initialize Facebook social plugins on the page
	version		 : 'v2.2' // point to the latest Facebook Graph API version
	});
};

(function(d, s, id){ 
	var js, fjs = d.getElementsByTagName(s)[0]; 
	if (d.getElementById(id)) {return;} 
	js = d.createElement(s); js.id = id; 
	js.src = "//connect.facebook.net/en_US/sdk.js"; 
	fjs.parentNode.insertBefore(js, fjs); 
}(document, 'script', 'facebook-jssdk')
);


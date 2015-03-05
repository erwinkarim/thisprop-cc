Parse.initialize("oR8lLc6Rwxtdnfc70vUA4UTa5gZkk3Zh8xkf2f2A", "Mv1QKomwzfLAXFsSdGcAfBqqZUB6URPWgw8s34Sq");
var graph_path = 'https://graph.facebook.com/v2.2';

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({ 
  appId      : '591760294291555', // Facebook App ID
  cookie     : true,  // enable cookies to allow Parse to access the session
  xfbml      : true,  // initialize Facebook social plugins on the page
  version    : 'v2.2' // point to the latest Facebook Graph API version
  });

  var user = null;
  FB.getLoginStatus(function(response){
    if(response.status == 'connected'){
      //check properly if logged in
      user = Parse.User.current();
      console.log('user logged in');
      if(user == null){
        //sometime logged in facebook, but not through is app, so need to register
        console.log('user is null');
        response.status = 'not_authorized';
      }
      console.log(user);
    } else {
      console.log('user not logged to thisprop');
      response.status = 'not_logged_in';
    };

    console.log('status - ' + response.status);
    
    //update the user menu
    $.get('/login-menu', { status:response.status, username:'test'}, function(data){
      $('#user-menu').empty().append(data).ready(function(){
        $('#login-fb').click(function(){
          Parse.FacebookUtils.logIn('public_profile,email', {
            success:function(user){
              FB.api('/me', { fields: 'name' }, function(response){
                user.save({ name: response.name }, { success: function(user){ console.log('saved user info') } } ) 
              });
              console.log('logged into facebook');
            }
          });
        });
        $('#logout-fb').click(function(){
          Parse.User.logOut();
          FB.logout();
        });
      });
    });
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

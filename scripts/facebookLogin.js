function loginFacebook()
{
    ////Thi is called with the results from FB.getLoginStatus().

    function statusChangeCallback(response){

        console.log('statusChangeCallback');
        console.log(response); //reponse object let the app knows the current person's status
        if(reponse.status == 'connected')
        {
            //Logged into the app
            testAPI();

        }else if(response.status == 'not_authorized')
        {
            //The person is loggef into Facebook but not in the app
            document.getElementById('status').innerHTML = 'Please log' + 
            'into this app';

        }else{

            //The person is not logged intp Facebook , so were not sure if
            //they are logged into this app or not
            document.getElementById('status').innerHTML = 'Please log' + 
            'into this Facebook. ';
        }

    }
//This function is called when someone finish with the loggin Button
//See the onlogin handler attached to it in the sample code below

function checkLoginState () {
    FB.getLoginStatus(function(reponse)
    {
        statusChangeCallback(reponse);
    });
}
window.fbAsyncInit = function(){
    FB.init({
        appId : '1406548569627758', //is it vunerable here? 
        cookie : true, //enable cookies to allow the server to access the session
        xfbml : true, //parse social plugins on this page
        version :  'v2.0' //use version 2.0
    });
    //Javascript SDk initialized with code below
    //we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response){
    statusChangeCallback(response);
  });

};

//Load the SDK asynchronously
(function(d,s,id){

    var js, fjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document,'script', 'facebook-jssdk'));

//Here its a test of the Graph API after login is successful
function testAPI(){
console.log('Welcome! Fetching your information...');
FB.api('/me', fnction(response){
    console.log('Successful login for:' + reponse.name);
    document.getElementById('status').innerHTML = 
    'thanks for logging in,' + reponse.name + '!';
});

}


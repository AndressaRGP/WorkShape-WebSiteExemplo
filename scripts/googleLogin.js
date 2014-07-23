
//-----Google Code

var client_id = '350435369758.apps.googleusercontent.com';


 function auth() {
        var config = {
          'client_id': client_id,
          'scope': 'https://www.googleapis.com/auth/urlshortener'
        };
        gapi.auth.authorize(config, function() {
          console.log('login complete');
          console.log(gapi.auth.getToken());
        });
      }





//End of Google Code



//post request, create user or log in 

function loginWorkshape(googleUID){

        
                         $.ajax({
                                type: "POST",
                                url: "http://192.168.1.147:9000/users",
                                dataType:'json',
                                data:{ googleUID : googleUID},  // falar o que esta enviando
                                success: function(msg) {
                                  $.cookie("sessionID",msg.sessionID)  
                                }
                                });
                         



}
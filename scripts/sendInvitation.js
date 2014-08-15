function sendInvitation(){
    //Get value of input field with id ="numb"
    var teammateEmail= document.getElementById("email").value;
   // var teamEmail =document.getElementById("email").value; //maybe not, tae it off.
    //var adminID = document.getElementById("adminID").value;
    
    //Get the element with id = "demo"
    
    //If value is apace or not a number
    if((teammateEmail.trim() == ""))
    {
        alert("You did not fill the team Name  or email, Please enter with a name");
    
    }else{
        
          //send Email to teammateEmail
           $('#add_Emails').on('submit', function(e){
                  e.preventDefault();
                var teamID = $.cookie("teamID")
                var sessionID = $.cookie("sessionID")

                             $.ajax({
                                    type:"POST",
                                    url: "http://192.168.1.147:9000/email/" + teamID
                                     + "?sessionID=" + sessionID,
                                     data: $(this).serialize(),
                                    success: function(){
                                    //if success login show team info such as temName and teamID
                                    alert("Invitation Sent")
                                    }
                                    
                                    });
                               });
     
        }

    }

 


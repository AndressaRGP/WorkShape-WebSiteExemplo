function editTeam(){ //how to do this int the HTML side?
    //Get value of input field with id ="name"

  alert("salving edition")
    var teamN= document.getElementById("teamName").value;
    var teamDescription = document.getElementById("teamDescription").value;
    var teamCharity = document.getElementById("teamCharity").value;
    var teamLogo = document.getElementById("teamLogo").value;
    
    
    //If value is apace or not a number
    if((teamDescription.trim() == ""))
    {
        alert("Please, enter with a Description");
        
    }else{
      //do PUT request(edit team)
 
        //---PUT request using jquery 
        //get teamID and SessionID  in the URL to send here.
       $('#edit_Team').on('submit', function(e){
                  e.preventDefault()
                var teamID = $.cookie("teamID")
                var sessionID = $.cookie("sessionID")

                             $.ajax({
                                    type:"PUT",
                                    url: "http://192.168.0.12:9000/team/" + teamID
                                     + "?sessionID=" + sessionID,
                                     data: $(this).serialize(),
                                    success: function(){
                                    //if success login show team info such as temName and teamID
                                    alert("Team Edited")
                                    }
                                    
                                    });
                               });
                               //----end of get request
    
     
    }
 // end login Team function
    


}



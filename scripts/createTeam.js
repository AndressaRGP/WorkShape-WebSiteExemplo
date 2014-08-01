function createTeam(){
    //Get value of input field with id ="numb"
    var teamN= document.getElementById("teamName").value;
    var companyName =document.getElementById("companyName").value; //maybe not, tae it off.
    var charityName = document.getElementById("charityName").value;
    //Get the element with id = "demo"
    
    //If value is apace or not a number
    if((teamN.trim() == "") || (companyName.trim() == "") || (charityName.trim() == ""))
    {
        alert("You did not fill the team Name  or companyName, Please enter with a name");
    
    }else{
        
        $('#create_team_form').on('submit', function(e){
                        e.preventDefault();
                         var sessionID = $.cookie("sessionID")
                         $.ajax({
                                type: "POST",
                                url: "http://192.168.1.147:9000/team/?sessionID="+sessionID,
                                data: $(this).serialize(),
                                success: function(msg) {
                                    $.cookie("teamID",msg.teamID)
                                    $.cookie("sessionID",sessionID)
                                //window.location.href='teamCreated.html'
                                }
                                });
                         });
     
        }

    }

           function openEditTeamPage(){
        
          window.location.href='editTeam.html'

    }



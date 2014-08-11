function createTeam(){
    //Get value of input field with id ="numb"
    var _teamName= document.getElementById("teamName").value;
    var _companyName =document.getElementById("companyName").value; //maybe not, tae it off.
    var _charityID = document.getElementById("charityID").value;
    var _teamDescription = document.getElementById("teamDescription").value;
    
    //If value is apace or not a number
    if((_teamName.trim() === "") || (_companyName.trim() === "") || (_charityID.trim() === ""))
    {
        alert("You did not fill the team Name  or companyName, Please enter with a name");
    
    }else{//('#formName').serialize(), not working anyways 
             var sessionID = $.cookie("sessionID")
             $.ajax({
                    type: "POST",
                    url: "http://192.168.1.147:9000/team/?sessionID="+sessionID,
                    dataType:'json',
                    data:{teamName: _teamName,companyName:_companyName,teamDescription:_teamDescription,charityID:_charityID,},
                    success: function(msg) {
                        alert("team supposedly saved")
                        $.cookie("teamID",msg.teamID)
                        $.cookie("sessionID",sessionID)
                    //window.location.href='teamCreated.html'
                    }
              });
           
        }   
}
   function openEditTeamPage(){
        
       window.location.href='editTeam.html';

    }



function createTeam(){
    //Get value of input field with id ="numb"
    var _teamName= document.getElementById("teamName").value;
    var _companyName =document.getElementById("companyName").value; //maybe not, tae it off.
    var _charityID = document.getElementById("charityID").value;
    var _teamDescription = document.getElementById("teamDescription").value;
    var _profileImage = document.getElementById("upload-area").value; //PATH of the Image
    
    //If value is apace or not a number
    if((_teamName.trim() === "") || (_companyName.trim() === "") || (_charityID.trim() === ""))
    {
        alert("You did not fill the team Name  or companyName or Charity, Please enter with a name");
    
    }else{//('#formName').serialize(), not working anyways 
         var sessionID = $.cookie("sessionID")
         $.ajax({
                type: "POST",
                url: "http://192.168.0.24:9000/team/?sessionID="+sessionID,
                dataType:'json',
                data:{
                    teamName: _teamName,
                    companyName:_companyName,
                    teamDescription:_teamDescription,
                    charityID:_charityID,
                    profileImage:_profileImage
                },
                success: function(msg) {
                    $.cookie("teamID",msg.teamID)
                    $.cookie("sessionID",sessionID)
                    var teamID = msg.teamID;
                    sendInvitation(teamID,_companyName,teamName);
                    alert("team supposedly saved")
                }
          });
        }   
}

function retrieveCharity(){
    $.ajax({
        type:"GET",
        url: "http://192.168.0.24:9000/charity",
        success: function(data){
             data.charities.forEach(function(charity){
                 $(".charity-ul").append("<li>"+charity.charityName+"</li>");
             })
        }
    })
}

function retrieveTeam(){
    $.ajax({
        type:"GET",
        url: "http://192.168.0.24:9000/team",
        success: function(data){
             data.teams.forEach(function(team){
                 $(".teams-ul").append("<li>"+team.teamName+"</li>");
             })
        }
    })
}

function sendInvitation(teamID, adminName,teamName){
        var emailList = [];
        $(".emails-ul").children("li").each(function(){
            emailList.push($(this).value);
        });
      $.ajax({
                type: "POST",
                url: "http://192.168.0.24:9000/email/"+teamID,
                dataType:'json',
                contentType: false,
                data:{
                    teamName: teamName,
                    adminName:adminName, 
                    emails: "argomes@lakeheadu.ca"
                },
                success: function(msg) {
                   
                }
          });
}


$("#email").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        event.preventDefault();
        var email = document.getElementById("email").value;
        if(email.trim() !== ""){
          $(".emails-ul").append("<li>"+email+"</li>");
        }
    }  
})

var teamContainerOpen = false;
$(window).load(function(){
    $(".team").stop().animate({
        top: teamContainerOpen ? -1000 : 0  
    }, function() {
        retrieveCharity();
        retrieveTeam();
        teamContainerOpen = !teamContainerOpen;
    })
})

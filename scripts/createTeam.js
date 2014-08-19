function createTeam(){
    //Get value of input field with id ="numb"
    var _teamName= document.getElementById("teamName").value;
    var _companyName =document.getElementById("companyName").value; //maybe not, tae it off.
    var _charityID = document.getElementById("charityID").value;
    var _teamDescription = document.getElementById("teamDescription").value;
      var profileImage = document.getElementById("upload-area").value; //PATH of the Image
    
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
                    charityID:_charityID
                },
                success: function(msg) {
                    $.cookie("teamID",msg.teamID)
                    $.cookie("sessionID",sessionID)
                    addImage(profileImage,msg.teamID)
                    alert("team supposedly saved")
                //window.location.href='teamCreated.html'
                }
          });
        }   
}

function addImage(imagePath, teamID){
    $.ajax({
        type: "PUT",
        url: "http://192.168.0.24:9000/team/" +teamID,
        dataType:'json',
        data:{
            profileImage: imagePath
        },
        success: function(msg) {
           console.log("Image of the team saved")
        }
    })
}

var teamContainerOpen = false;
$(window).load(function(){
    $(".team").stop().animate({
        top: teamContainerOpen ? -1000 : 0
    }, function() {
        teamContainerOpen = !teamContainerOpen;
    })
})

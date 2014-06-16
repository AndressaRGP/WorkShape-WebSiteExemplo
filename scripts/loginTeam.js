function loginTeam(){
    //Get value of input field with id ="numb"
    var teamN= document.getElementById("teamName").value;
    var teamID = document.getElementById("adminID").value;
    
    
    
    //If value is apace or not a number
    if((teamN.trim() == "") || adminID.trim()== "")
    {
        alert("Please, enter with a Team Name and a Team ID");
        
    }else{
        //do get
        //compare input data to the team existents
        //return login with team name or team does not exist
        //salve edition of emails
        
        //---get request using jquery
        
        $.('#edit_Team').on('submit', function(e)){
        $.ajax({
               type:"GET",
               url: "http://192.168.0.12:8085/team",
               dataType: 'json',
               data: {
               'id' : teamID
               },
               success: function(){
               //if success login show team info such as temName and teamID
               alert("You are logged in");
               }
               
               
               });
        });  //----end of get request
        
        //compare data from the get request to the input data
        
     

      
    
        
        //deal with response and check if team was created
        
    }
    
}
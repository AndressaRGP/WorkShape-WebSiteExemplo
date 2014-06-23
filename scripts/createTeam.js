function checkInput(){
    //Get value of input field with id ="numb"
    var teamN= document.getElementById("teamName").value;
    var teamEmail =document.getElementById("email").value; //maybe not, tae it off.
    var adminID = document.getElementById("adminID").value;
    
    //Get the element with id = "demo"
    
    //If value is apace or not a number
    if((teamN.trim() == "") || teamEmail.trim()== "" || adminID.trim()== "")
    {
        alert("You did not fill the team Name  or email, Please enter with a name");
    
    }else{
      //  alert("Form submited!");
      
        
        $('#create_Team').on('submit', function(e){
                         e.preventDefault();
                         var sessionID = $.cookie("sessionID")
                         $.ajax({
                                type: "POST",
                                url: "http://192.168.0.12:9000/team/"+sessionID,
                                data: $(this).serialize(),
                                success: function() {
                                window.location.href='teamCreated.html'
                                }
                                });
                         });
     
        }

}
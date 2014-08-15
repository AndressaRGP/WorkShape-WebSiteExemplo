//do get request to get the type of social media and show in the design
$(window).load(function(){
	//ajax method  
	var sessionID = $.cookie("sessionID");
	   $.ajax({
            type: "GET",
            url: "http://192.168.1.147:9000/users/?sessionID="+sessionID,
            success: function(msg) {
            	console.log(msg);
            	var fbookID = msg.fbUID;
            	var googleID = msg.googleUID;
            	var twitterID = msg.twitterUID;

       			if(fbookID !== undefined){
					 $(".fbook_img").animate({
							left:"17%",
							top:"270px",
						});

					}else
					if(googleID !== undefined){
					   $(".google_img").animate({
							left:"17%",
							top:"270px",
						  });
					}else
					if(twitterID !== undefined){
						 $(".twitter_img").animate({
								left:"17%",
								top:"270px",
							});
			    }
            }
      });
});



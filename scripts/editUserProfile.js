//do get request to get the type of social media and show in the design
$(window).load(function(){
	var profileContainerOpen = false;
	$(".profile").stop().animate({
		top: profileContainerOpen ? -1000 : 0
	}, function() {
		profileContainerOpen = !profileContainerOpen;
	})

	//ajax method  
	var sessionID = $.cookie("sessionID");
	   $.ajax({
            type: "GET",
            url: "http://192.168.0.24:9000/users/?sessionID="+sessionID,
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



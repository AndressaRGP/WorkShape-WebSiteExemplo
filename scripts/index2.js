$(window).load(function() {
	var userName =  $.cookie("userName")
	$(".sign_in").text("Welcome: "+userName);
	$(".sign_in").css({'font-size': ""});
//ANIMATION
	$(".logo").animate({},function(){
	})
})



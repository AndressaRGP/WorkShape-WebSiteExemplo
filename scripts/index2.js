$(window).load(function() {
	var userName =  $.cookie("userName")
	$(".sign_in").text("Welcome: "+userName);
	$(".sign_in").css({'font-size':fontSize});
//ANIMATION
	$(".logo").animate({},function(){
	})
})



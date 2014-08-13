$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

$("#createMenu").click(function () {
	 window.location.href='createTeam.html';
});

var profileContainerOpen = false
$("#myProfileMenu").click(function () {
	$(".profile").stop().animate({
		top: profileContainerOpen ? -1000 : 0
	}, function() {
		profileContainerOpen = !profileContainerOpen;
	})
})


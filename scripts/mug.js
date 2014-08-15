$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

$("#createMenu").click(function () {
	 window.location.href='createTeam.html';
});

$("#myProfileMenu").click(function () {
	window.location.href='editUserProfile.html';
})


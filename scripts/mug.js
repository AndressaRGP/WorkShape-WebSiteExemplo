$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

var teamContainerOpen = false
$("#createMenu").click(function () {
	$(".team").stop().animate({
		top: teamContainerOpen ? -1000 : 0
	}, function() {
		teamContainerOpen = !teamContainerOpen;
	})
})
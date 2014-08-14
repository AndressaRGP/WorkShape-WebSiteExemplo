//Leaderboard 
var profileContainerOpen = false;
$(window).load(function(){
$(".profile").stop().animate({
		top: profileContainerOpen ? -1000 : 0
	}, function() {
		profileContainerOpen = !profileContainerOpen;
	})
});

//AVATARS ANIMATION

var avatarChoosen = true;
$(".girl1").click(function(){
	$(".girl1").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "37%",
		top:avatarChoosen ? "370px":"480px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
$(".girl2").click(function(){
	$(".girl2").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "40%",
		top:avatarChoosen ? "370px":"480px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});

$(".girl3").click(function(){
	$(".girl3").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "43%",
		top:avatarChoosen ? "370px":"480px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
$(".girl4").click(function(){
	$(".girl4").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "46%",
		top:avatarChoosen ? "370px":"480px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
$(".girl5").click(function(){
	$(".girl5").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "49%",
		top:avatarChoosen ? "370px":"480px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
$(".guy1").click(function(){
	$(".guy1").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "37%",
		top:avatarChoosen ? "370px":"530px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
$(".guy2").click(function(){
	$(".guy2").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "40%",
		top:avatarChoosen ? "370px":"530px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});

$(".guy3").click(function(){
	$(".guy3").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "43%",
		top:avatarChoosen ? "370px":"530px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});

$(".guy4").click(function(){
	$(".guy4").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "46%",
		top:avatarChoosen ? "370px":"530px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
$(".guy5").click(function(){
	$(".guy5").stop().animate({
		width: avatarChoosen ? "7%" :"3%",
		left:avatarChoosen ? "40%" : "49%",
		top:avatarChoosen ? "370px":"530px",
	},function(){
		avatarChoosen = !avatarChoosen;
	});
});
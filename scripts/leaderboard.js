var open = true
$("#createMenu").click(function () {
	if(open){
	   $(".team").hide("fast", function() {
	                          open = !open;
	                         })
	}else{
		   $(".team").show(3000);
	}
})
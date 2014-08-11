var open = true
$("#createMenu").click(function () {
  $(".team").stop().animate({top: open ? -1000 : 70}, function() {
                              open = !open;
                             })
})
$(document).mousemove(function(e) {
  $("#mouse-image")
    .stop()
    .animate({ left: e.pageX, top: e.pageY });
});

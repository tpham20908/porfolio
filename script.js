$(function() {
  var backgroundImg = [
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1550&q=80",
    "https://images.unsplash.com/photo-1473101167633-bfa08e705e4b?auto=format&fit=crop&w=1550&q=80"
  ];
  $("body").css("background-image", "url(" + backgroundImg[0] + ")" );

  var menuVisible = false;
  $("#button").click(function() {
    if (menuVisible) {
      $("#navbar").addClass("pull-right");
      $("#navbar").css({"display" : "none"});
      menuVisible = false;
      return;
    }
    $("#navbar").css({"display" : "block"});
    menuVisible = true;
  });
  $("#navbar").click(function() {
    $(this).css({"display" : "none"});
    menuVisible = false;
  });
});


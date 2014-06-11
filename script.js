$(document).ready(function(){
  $("p").click(function(){
    $(this).hide("slow");
  });
});

$(document).ready(function(){
  $("#myimage").click(function(){
    $(this).fadeOut("slow");
  });
});
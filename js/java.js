$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle(fast);
  });
  $("#b").click(function(){
    $("#panel").stop();
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});


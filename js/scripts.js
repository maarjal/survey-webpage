$(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    var dob = $("#born").val();
    $(".born").text(dob);
    
    var meal = $("input:radio[name=meal]:checked").val();
    $(".meal").text(meal);

    var music = $("#music").val();
    $(".music").text(music);

    $("#survey-results").show();
    event.preventDefault();
  });
});

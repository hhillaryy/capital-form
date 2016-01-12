$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var message1Input = $("input#message1").val();

    $(".message1").text(message1Input);

    $("#output").show();
    event.preventDefault();
  });
});

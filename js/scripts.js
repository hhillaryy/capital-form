$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var message1Input = $("input#message1").val();
    var newMessage = message1Input.toUpperCase();
    
    $(".message1").text(newMessage);

    $("#output").show();
    event.preventDefault();
  });
});

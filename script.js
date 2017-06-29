$('#myModal').on('shown.bs.modal', function() {
    if ($("#myMail").val().length != 0 &&
        $("#myName").val().length != 0) {
        $('#myInput').focus()
        $(".modal-body").html("<p>Hi thank you " + $("#myName").val() + ", for signing up! We will send an email to " + $("#myMail").val() + " shortly.</p>");
    }
    else {
        $(".modal-body").html(" ");
    }
});



$(document).ready(function() {
    //HI - <name> thank you for signing up! We will send an email to <email> shortly”

    //For the Sign Up Button  


});
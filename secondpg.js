$("#list").on("click",".meds", function() {
	$(this).toggleClass("cross");
});
$("#list").on("click", ".fa-square", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
});

$("#plus").on("click", function() {
    $("#form").slideToggle();
});


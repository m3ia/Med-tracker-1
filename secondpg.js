$("#add-med").on("submit", function(event) {
	event.preventDefault();
	let userInput = $("#add-med-name").val().trim();
	let date = $("#add-med-date").val().trim();
	let freq = $("#add-med-freq").val().trim();
	if (userInput.length > 0) {
		$("#list").append("<li class='meds'><i class='far fa-square'></i>" + " " + userInput + "  " + date + "<br>"  + freq + "</li>")
	}
	$("#add-med-name").val("");
	$("#add-med-date").val("");
	$("#add-med-freq").val("Once a day");
});

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
    $("#add-med").slideToggle();
});


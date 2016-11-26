//check off specific todos by clicking
$("ul").on("click", "li", function() {
	//toggle the css class completed on and off when an li is clicked
	$(this).toggleClass("completed");
});

//click on X to delet todo
$("ul").on("click", "span", function(event) {
	//removes the span and the li by call .parent()
	$(this).parent().fadeOut("500", function() {
		$(this).remove();
	});
	/*seperates the span from the li so i can only click on the span*/
	event.stopPropagation();
});

$("input[type = 'text'").keypress(function(event) {
	//if the use hits enter
	if(event.which === 13) {
		//grabbing newe todo text from input
		var todoText = $(this).val();
		//clear input box
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});

$(".fa-pencil-square-o").click(function() {
	//toggle the fade 
	$("input[type = 'text'").fadeToggle();
});

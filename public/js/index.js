//show resume container
$('#chevronUp').on('click', function() {
	$('#carouselDiv').animate({
		top: 0,
		height: 'toggle',
	}, 500, function() {

	});
	$('#resumeContainer').animate({
		bottom: 0,
		height: 'toggle',
	}, 500, function() {

	});
});
//show intro container
$('#chevronDown').on('click', function() {
	$('#resumeContainer').animate({
		bottom: 0,
		height: 'toggle'
	}, 500, function() {

	});
	$('#carouselDiv').animate({
		top: 0,
		height: 'toggle'
	}, 500, function() {

	});
});
//show soft quote page
$('#softQuoteA').on('click', function () {
	showCarouselPage(1);
});
//show operation dial out page
$('#operationDialOutA').on('click', function () {
	showCarouselPage(2);
});
//show call center page
$('#callCenterA').on('click', function () {
	showCarouselPage(3);
});
//show intro page
$('.handLeft').on('click', function() {
	showCarouselPage(0);
});
//show carousel page based on page number
function showCarouselPage(pageNumber) {
	$('.carousel').carousel(pageNumber);
}

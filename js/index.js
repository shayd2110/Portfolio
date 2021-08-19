$(".nav-toggle").click(() => {
	$("body").toggleClass("nav-open");
});

var nav_list = $(".nav__list");

$(".nav__link").click(() => {
	$("body").removeClass("nav-open");
});

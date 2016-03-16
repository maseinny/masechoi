$(document).ready(function() {

//PORTFOLIO ITEM HOVER
	$(".portfolio-item").hover(
		function() {
			$(this).children('p').css("font-family", "'Satisfy'");
		}, function() {
			$(this).children('p').css("font-family", "'Lato'");
		}
	);

//PORTFOLIO SORT
	$(".button#ux").click(function() {
		if ($(".button#ux").hasClass('active')) {
			$(this).removeClass('active');
			$(".worksection a").show();
		} else { 
			$(".button#ux").addClass('active'); 

			$(".button#dev").removeClass('active');
			$(".button#production").removeClass('active');
			$(".button#design").removeClass('active');
			//$(".active").css({"background-color": "#156fab", "border-top-color": "#156fab", "background-image": "none"});
			$(".worksection a").hide();
			$("a.ux").show();
		};
	});

	$(".button#dev").click(function() {
		if ($(".button#dev").hasClass('active')) {
			$(this).removeClass('active');
			$(".worksection a").show();
		} else { 
			$(".button#dev").addClass('active'); 

			$(".button#design").removeClass('active');
			$(".button#production").removeClass('active');
			$(".button#ux").removeClass('active');
			//$(".active").css({"background-color": "#156fab", "border-top-color": "#156fab", "background-image": "none"});
			$(".worksection a").hide();
			$("a.dev").show();
		};

	});

	$(".button#production").click(function() {
		if ($(".button#production").hasClass('active')) {
			$(this).removeClass('active');
			$(".worksection a").show();
		} else { 
			$(".button#production").addClass('active'); 

			$(".button#dev").removeClass('active');
			$(".button#design").removeClass('active');
			$(".button#ux").removeClass('active');
			//$(".active").css({"background-color": "#156fab", "border-top-color": "#156fab", "background-image": "none"});
			$(".worksection a").hide();
			$("a.production").show();
		};

	});

	$(".button#design").click(function() {
		if ($(".button#design").hasClass('active')) {
			$(this).removeClass('active');
			$(".worksection a").show();
		} else { 
			$(".button#design").addClass('active'); 

			$(".button#dev").removeClass('active');
			$(".button#production").removeClass('active');
			$(".button#ux").removeClass('active');
			//$(".active").css({"background-color": "#156fab", "border-top-color": "#156fab", "background-image": "none"});
			$(".worksection a").hide();
			$("a.design").show();
		};

	});


	//PHOTO HOVER
	$('.feature img').hover(
		function(){
			var title = $(this).attr('alt');
			$(this).append('<div class="photo-hover">' + title + '</div>');
		},
		function(){
			$(this).next().remove('.photo-hover');
		}
	);
	
});

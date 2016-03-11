$(document).ready(function() {
	if (document.getElementById('ux').value == "ux") {
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
	};
});
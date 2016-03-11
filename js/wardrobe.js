$(document).ready(function() {


	$('button').click( function() {
		var wardrobeClass = $(this).attr('id');

		if (wardrobeClass === 'all') {
			if ($('button').hasClass('active')) { 
				$('button').removeClass('active');
			};
			$(this).addClass('active');
			$('.wardrobe').show();
		}
		else {
			if ($('button').hasClass('active')) { 
				$('button').removeClass('active');
			};
			$(this).addClass('active');
			$('.wardrobe').hide();
			$('.' + wardrobeClass).show();
		}
	});

});

	/*
if ( wardrobeClass != 'all' ) {

			$( '.wardrobe' ).hide();
			$( '.wardrobe.' + wardrobeClass ).show();
		} else {
			$( '.wardrobe' ).show();
		}




	$('#all').click(function() {
		$('.wardrobe').show();
	});
	$('#shirts-button').click(function() {
	
		$('.shirts').show();
		$('.pants').hide();
		$('.jackets').hide();
		$('.sweaters').hide();
		$('.accessories').hide();
	});
	$('#pants-button').click(function() {
	
		$('.shirts').hide();
		$('.pants').show();
		$('.jackets').hide();
		$('.sweaters').hide();
		$('.accessories').hide();
	});
	$('#jackets-button').click(function() {
	
		$('.shirts').hide();
		$('.pants').hide();
		$('.jackets').show();
		$('.sweaters').hide();
		$('.accessories').hide();
	});
	$('#sweaters-button').click(function() {
	
		$('.shirts').hide();
		$('.pants').hide();
		$('.jackets').hide();
		$('.sweaters').show();
		$('.accessories').hide();
	});
	$('#accessories-button').click(function() {
		
		$('.shirts').hide();
		$('.pants').hide();
		$('.jackets').hide();
		$('.sweaters').hide();
		$('.accessories').show();
	});
}); 

*/

	
$( document ).ready(function() {
//toggles :hover for touch devices
	$('#screen-background').bind('touchstart touchend', function(e) {
         e.preventDefault();
         $(this).toggleClass('hover_effect');
     });
		 $('.hover').bind('touchstart touchend', function(e) {
	          e.preventDefault();
	          $(this).toggleClass('hover_effect');
	      });
	// $('#imac').hover(function(){
	//         $(this).find('img').fadeTo(500, 0.5);
	// 	}, function(){
	//         $(this).find('img').fadeTo(500, 1);
	// 	});
	//
	// $('#screen-background').click(function() {
	// 	    $('#imac').find('img').fadeTo(0, 1);
	//         $("#screen-background").stop().animate({width: 800, height: 533}, 200 );
	//         }).mouseout(function(){
	//         $("#screen-background").stop().animate({width: 280, height: 187}, 200 );
	//     });


});
